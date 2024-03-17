const express = require('express');

const {HandleOrder} = require('../controller/orderController.js')

const orderRoute = express.Router();


// POST Request
orderRoute.route('/customer/orders').post(HandleOrder);


module.exports = orderRoute
