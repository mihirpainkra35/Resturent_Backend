// lib's import
const express = require('express');


const {ShowMenu,handleSearch,ShowItemsByCategory} = require('../controller/MenuControl.module.js');
const {ShowCategory} = require("../controller/categoryController.js");
const {ShowTodaysSpecialMenu} = require("../controller/todaysSpecialMenuController.js")

const menurouter = express.Router();

// GET Request
menurouter.route('/TodaysSpecialMenu').get(ShowTodaysSpecialMenu);
menurouter.route('/menu/search').get(handleSearch);
menurouter.route('/menu/itemByCategory').get(ShowItemsByCategory);
menurouter.route('/menu/ByCategory').get(ShowCategory);




// POST Request
// menurouter.route('/menu/adding').post(addingMenu)


// PUT Request
// router.route('/user').get((req,res)=>{res.status(201).send('get user data')})

// UPDATE Request
// router.route('/user').get((req,res)=>{res.status(201).send('get user data')})



module.exports = menurouter;