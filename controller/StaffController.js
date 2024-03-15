// const MenuModel = require('../models/TodaysSpecialMenu.model');
const MenuModel = require('../models/menu.model.js');

const admin = require("firebase-admin");
const uuid = require("uuid-v4");

const { privateKey } = JSON.parse(process.env.private_key);


// firebase admin intialization
admin.initializeApp({
    credential: admin.credential.cert({
        type: "service_account",
        project_id: process.env.project_id,
        private_key_id: process.env.private_key_id,
        private_key: privateKey,
        client_email: process.env.client_email,
        client_id: process.env.client_id,
        auth_uri: process.env.auth_uri,
        token_uri: process.env.token_uri,
        auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
        client_x509_cert_url: process.env.client_x509_cert_url,
        universe_domain: process.env.universe_domain
    }),
    databaseURL: "https://dawat-dhaba-5764f-default-rtdb.firebaseio.com",
    storageBucket: "gs://dawat-dhaba-5764f.appspot.com"
});

// set up the firebase storage bucket
const bucket = admin.storage().bucket();

//function to handle addition of new menu with there image in firebase
const AddMenu =  (req, res) => {
    
  const price = parseInt(req.body.price);
  const rating = parseInt(req.body.rating);
  const quantity = parseInt(req.body.quantity);

    const fileOName = req.body.itemName;
    const splitname = req.file.originalname.split(".")
    let SpaceName = fileOName.replace(/\s/g, "");
    const now = new Date();

    const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
    const formattedTime = `${now.getHours().toString().padStart(2, '0')}-${now.getMinutes().toString().padStart(2, '0')}-${now.getSeconds().toString().padStart(2, '0')}`;
    const NewName = `${SpaceName}_${formattedDate}_${formattedTime}.${splitname[1]}`

    const folderName = "images";

    // console.log(fileOName)

    if (!req.file) {
        return res.status(400).send("no file found")
    }
    var token = uuid()
    const metadata = {
        metadata: {
            firebaseStorageDownloadTokens: token
        },
        contentType: req.file.mimetype,
        cacheControl: "public, max-age=315360000",

    };
    const blob = bucket.file(`${folderName}/${NewName}`);
    const blobStream = blob.createWriteStream({

        metadata: metadata,
        gzip: true, //enable compression if needed

    });

    blobStream.on("error", err => {
        console.log(err);
        return res.status(500).json({ error: "unable to upload image " })
    });

    blobStream.on("finish", async () => {
        const Image_Url = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${folderName}%2F${NewName}?alt=media&token=${token}`;

    const data =  MenuModel({
        itemName: req.body.itemName,
        price,
        rating,
        category: req.body.category,
        Image_Url,
        quantity
    })
    const result = await data.save();

    console.log(result);
    return res.status(200).json({
        status: "success",
        status_code: 200,
        message: "item added",
        result
    });
    // return res.status(200).send("file recevied");

    })
    blobStream.end(req.file.buffer);

}

    

module.exports = { AddMenu };