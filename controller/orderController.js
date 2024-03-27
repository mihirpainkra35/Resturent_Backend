const OrderModel = require('../models/Order.model.js')
const HandleOrder = async (req, res) => {
    const metadata = req.body
    console.log(metadata);
    // const data = OrderModel(req.body);
    // let result = await data.save();
    res.send("data added in order table")

}

module.exports = { HandleOrder }