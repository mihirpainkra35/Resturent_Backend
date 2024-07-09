const express = require('express');

const {HandleOrder} = require('../controller/orderController.js');
const {HandleCart,HandleCartOrder,HandleQuantityInCart,HandleDeletionOfItem} = require('../controller/cartController.js');
const orderRoute = express.Router();


// POST Request
orderRoute.route('/customer/orders').post(HandleOrder);
orderRoute.route('/customer/addItem').post(HandleCart);
// PUT Request
orderRoute.route('/customer/quantityChangeInCart').put(HandleQuantityInCart);
// GET Request
orderRoute.route('/customer/cart').get(HandleCartOrder);
// DELETE Request
orderRoute.route('/customer/removeItem').delete(HandleDeletionOfItem);


module.exports = orderRoute
