const MenuModel = require('../models/FoodMenu.model');

//post method for menu body
// {
//     itemName: "panner burji",
//     price: 150,
//     rating: 4.2,
//     category: 'veg',
//     Image_info: {
//         Image_url: "https://www.foodie-trail.com/wp-content/uploads/2021/08/PHOTO-2021-07-19-09-01-27.jpg",
//         Image_mimetype: 'jpg',
//         filename: 'panner burji'
//     },
//     qunatity: 1
// }


// const addingMenu = async (req, res) => {

//     try {

//         const data = MenuModel()
//         const result = await data.save();
//         console.log('new item added');
//         res.send(result);
//     } catch (error) {

//         console.log(error);
//     }

// };

const ShowMenu = async (req, res) => {

    try {
        const data = await MenuModel.find()
        res.send(data);

    } catch (error) {
        console.log(error);
    }
}

module.exports = {  ShowMenu }