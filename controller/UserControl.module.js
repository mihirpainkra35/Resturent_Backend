const UserModal = require('../models/User.model.js')
const twilio = require('twilio')


//twilio account key's
const AccountSID = process.env.AccountSid;
const AuthToken = process.env.AuthToken;
const fromNumber = process.env.FROMPHONENUMBER;

const client = new twilio(AccountSID, AuthToken);

//OTP GENERATOR function
// const generateOTP = () => {
//     return Math.floor(100000 + Math.random() * 900000);
// }

//generate and send otp
const UserOTPGeneration = async (req, res) => {
    try {

        const User_Phone_number = req.query.pNumber;
        
        
        let result;
        // let otp = generateOTP();
        let data = await UserModal.findOne({ User_Phone_number })
       
        if (data) {
            let Visiting_count = data.Visiting_count;
            let updatedData = await UserModal.updateOne({ User_Phone_number }, { $set: { Visiting_count: Visiting_count + 1 } })
            let newdata = await UserModal.findOne({ User_Phone_number })
            res.status(200).send("OTP sended" + newdata);

        } else {
            let Visiting_count = 1;
            data = UserModal({ User_Phone_number, Visiting_count})
            result = await data.save();
            // console.log(result);
            // client.messages
        //     //     .create({
        //     //         body: 'Welcoming you please use this OTP ' + otp,
        //     //         to: `+91${User_Phone_number}`, // Text your number
        //     //         from: fromNumber, // From a valid Twilio number
        //     //     })
        //     //     .then(() => console.log("OTP send successfull"));
            res.status(200).send("OTP sended" );

        }


    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }

};

// verifing otp
const UserOTPVerification = async (req, res) => {
    const { _id, OTP } = req.body;

    try {
        let data = await UserModal.findOne({ _id, OTP });
        if (data) {
            res.send("welcome your otp is verified");
        } else {
            res.send("Invalid otp");
        }
    } catch (error) {
        console.log(error);
    }

}


const getUsers = async (req, res) => {
    try {

        let data = UserModal.find(req.body);
        let result = await data
        res.send(result);
        console.log(result);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }

};

module.exports = { UserOTPGeneration, UserOTPVerification }