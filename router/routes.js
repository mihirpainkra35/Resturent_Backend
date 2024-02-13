// lib's import
const express = require('express');


const {UserOTPGeneration} = require('../controller/UserControl.module.js') 
const {UserOTPVerification} = require('../controller/UserControl.module.js') 

const router = express.Router();

// GET Request
router.route('/user').get((req,res)=>{res.status(201).send('get user data')})

// POST Request
// router.route('/user/generateOTP').post(UserOTPGeneration)
router.route('/user/verifyOTP').post(UserOTPVerification)

// PUT Request
router.route('/user').get((req,res)=>{res.status(201).send('get user data')})

// UPDATE Request
router.route('/user').get((req,res)=>{res.status(201).send('get user data')})



module.exports = router;