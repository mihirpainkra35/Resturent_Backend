const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
   itemName:String,
   price:Number,
   rating:Number,
   category:String,
   Image_Url:String,
   quantity:Number
})

module.exports = mongoose.model('menus', MenuSchema);