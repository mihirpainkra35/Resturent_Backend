const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    category:String,
    category_Image_url:String
})

module.exports = mongoose.model('Category_collection', CategorySchema);