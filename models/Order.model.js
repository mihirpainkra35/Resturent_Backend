const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    Customer_id: String,
    status:{
        type:String,
        enum:["ordering","cooking","confirmed",""],
        default:"ordering"
    },
    order:[{
        itemId:String,
        itemName:String,
        itemQuantity:String,
    }]
})

// const OrderModel = mongoose.model('Order', );

module.exports = mongoose.model('Order', OrderSchema);;