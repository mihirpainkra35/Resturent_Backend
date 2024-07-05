const CartModel = require('../models/cart.model.js');
const menuModel = require("../models/menu.model.js");
// const UserModel = require("../models/User.model.js");


const HandleCart = async (req, res) => {
    const Customer_id = req.body.Customer_id;
    const item_Id = req.body.item_Id;
    const quantity = req.body.quantity;
    const finditem = await CartModel.findOne({ Customer_id, item_Id });



    if (finditem) {
        const item = await CartModel.findOneAndUpdate({ Customer_id, item_Id }, { quantity })

        res.status(200).json({
            status: "success",
            status_code: 200,
            message: "The item is already added",

        })

    } else {
        const item = await menuModel.findById(req.body.item_Id)
    
        let cartItem = {
            Customer_id,
            item_Id,
            itemName: item.itemName,
            Image_Url: item.Image_url,
            category: item.category,
            quantity,
            price:item.price,
        }
        const addItem = CartModel(cartItem);
        const result = await addItem.save();



        res.status(200).json({
            status: "success",
            status_code: 200,
            message: "The item is added to cart",

        })
    }





}
const HandleCartOrder = async (req, res) => {

    const Customer_id = req.query.Customer_id;

    const data = await CartModel.find({ Customer_id: Customer_id });

    res.status(200).json({
        status: "success",
        status_code: 200,
        numberOfItems: data.length,
        message: "cart items fetched",
        data

    })
}

module.exports = { HandleCart, HandleCartOrder }