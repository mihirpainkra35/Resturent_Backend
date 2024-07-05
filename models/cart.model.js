const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    Customer_id: String,
    item_Id:String,
    itemName:String,
    Image_Url:String,
    category:String,
    quantity:Number,
    price:Number,
    
 
})



module.exports = mongoose.model('Cart', CartSchema);;