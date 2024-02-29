// lib's import
const express = require('express');


const {ShowMenu,handleSearch} = require('../controller/MenuControl.module.js');

const menurouter = express.Router();

// GET Request
menurouter.route('/menu').get(ShowMenu);
menurouter.route('/menu/search').get(handleSearch);



// POST Request
// menurouter.route('/menu/adding').post(addingMenu)


// PUT Request
// router.route('/user').get((req,res)=>{res.status(201).send('get user data')})

// UPDATE Request
// router.route('/user').get((req,res)=>{res.status(201).send('get user data')})



module.exports = menurouter;