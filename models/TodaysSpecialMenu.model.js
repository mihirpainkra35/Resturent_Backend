const mongoose = require('mongoose');

const TodaysSpecialMenuSchema = new mongoose.Schema({
    itemName: String,
    price: Number,
    rating: Number,
    category: String,
    Image_url: String,
    qunatity: Number
})


module.exports = mongoose.model('Todays_Special_menu', TodaysSpecialMenuSchema);