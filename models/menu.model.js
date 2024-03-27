const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
   itemName:String,
   price:Number,
   rating:Number,
   category:String,
   Image_Url:String,
   quantity:Number,
   description:String
})

module.exports = mongoose.model('menus', MenuSchema);