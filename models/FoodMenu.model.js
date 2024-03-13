const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    itemName: String,
    price: Number,
    rating: Number,
    category: String,
    Image_url: String,
    qunatity: Number
})
const CategorySchema = new mongoose.Schema({
    category:String,
    category_Image_url:String
})

module.exports = mongoose.model('Todays_Special_menu', MenuSchema);