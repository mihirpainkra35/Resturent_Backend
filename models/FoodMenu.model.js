const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    itemName: Number,
    price: Number,
    discount: Number,
    category: String,
    Image_info: {
        Image_url: String,
        Image_mimetype: String,
        filename:String
    },
    qunatity: Number
})

module.exports = mongoose.model('menus', MenuSchema);