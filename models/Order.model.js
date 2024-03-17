const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({}, { strict: false })

// const OrderModel = mongoose.model('Order', );

module.exports = mongoose.model('Order', OrderSchema);;