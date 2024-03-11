const express = require('express');
const multer = require('multer');

const StaffContoller = require('../controller/StaffController');

// Router method from express
const Staffrouter = express.Router();

// set up multer for handling files
const storage = multer.memoryStorage();
const upload = multer({storage:storage})

//get methods
Staffrouter.route('/staff/addMenu').get((req,res)=>{res.send("hello staff")})
// post methods
// post method for file upload
Staffrouter.route('/staff/addMenu').post(upload.single("image"),StaffContoller.AddMenu);


module.exports = Staffrouter;