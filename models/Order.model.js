const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
 customer_id:String,
 itemsOrdered:{
    itemName:String,
    qunatity:Number,
    price:Number,
    item_id:String
 },
 foodStatus:String,
 totalPrice:Number,

})

module.exports = mongoose.model('Order', OrderSchema);