const CartModel = require('../models/cart.model.js');
const menuModel = require("../models/menu.model.js");
// const UserModel = require("../models/User.model.js");


const HandleCart = async (req, res) => {
    const Customer_id = req.body.Customer_id;
    const item_Id = req.body.item_Id;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const finditem = await CartModel.findOne({ Customer_id, item_Id });



    if (finditem) {
        const ItemQuantity = await CartModel.findOneAndUpdate({ Customer_id, item_Id }, { quantity,price })
      

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
            price,
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

const HandleQuantityInCart = async (req, res) => {

    try {
        const item = await CartModel.findByIdAndUpdate(req.body.id, {
            quantity: req.body.quantity,
            price:req.body.price
        },
        )
        res.status(200).json({
            status: "success",
            status_code: 200,
            message: "quantity has been updated"
        })
    } catch (error) {
        res.status(200).json({
            status: "success",
            status_code: 200,
            message: "there is no item with such id in the data"
        })
    }


}
const HandleDeletionOfItem = async (req, res) => {

 try {
    
    const removeItemFromCart = await CartModel.findByIdAndDelete(req.body.id)
 
    res.status(200).json({
        status: "success",
        status_code: 200,
        message: "item deleted successfully",
        DeletedItem: removeItemFromCart,
    })

 } catch (error) {
    res.status(200).json({
        status: "success",
        status_code: 200,
        message: "The item with such id is not exist in cart",
      
    })
 }

   
}
module.exports = { HandleCart, HandleCartOrder, HandleQuantityInCart, HandleDeletionOfItem }