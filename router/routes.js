// lib's import
const express = require('express');



//
const {getUsers} = require('../controller/contoller.module.js') 
const {Users} = require('../controller/contoller.module.js') 

const router = express.Router();

// GET Request
router.route('/user').get(getUsers)
// POST Request
router.route('/user').post(Users)
// PUT Request
router.route('/user').get((req,res)=>{res.status(201).send('get user data')})
// UPDATE Request
router.route('/user').get((req,res)=>{res.status(201).send('get user data')})



module.exports = router;