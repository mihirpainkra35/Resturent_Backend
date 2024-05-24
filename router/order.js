const express = require('express');

const {HandleOrder} = require('../controller/orderController.js');
const {HandleCart,HandleCartOrder} = require('../controller/cartController.js');
const orderRoute = express.Router();


// POST Request
orderRoute.route('/customer/orders').post(HandleOrder);
orderRoute.route('/customer/addItem').post(HandleCart);
orderRoute.route('/customer/cart').get(HandleCartOrder);


module.exports = orderRoute
