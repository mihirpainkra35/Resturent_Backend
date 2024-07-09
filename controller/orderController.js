const OrderModel = require('../models/Order.model.js')
const CartModel = require('../models/cart.model.js');

const HandleOrder = async (req, res) => {
    const Customer_id = req.body.Customer_id
   

    const item = await CartModel.find({Customer_id})

    
    const data = OrderModel({Customer_id,
        orders:item,
    });
    let result = await data.save();
    const ClearCart = await CartModel.deleteMany({Customer_id});
    

    res.status(200).json({
        status: "success",
        status_code: 200,
        message: "Your Order will be serve soon....",

    })

}

module.exports = { HandleOrder }