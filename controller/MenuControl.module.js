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

       
        res.json({
            status:"success",
            status_code:200,
            message:"Today's special data fetched",
            data
        });


    } catch (error) {
        console.log(error);
    }
}

// controller for item by category
const ShowItemsByCategory = async (req, res) => {
    const itemByCategory = await MenuModel.aggregate([{
        $group: {
            _id: {$toLower:"$category"},
            items: { $push: "$$ROOT" }
        }
    }]);
    res.send(itemByCategory);
}



// controller for searching items
const handleSearch = async (req, res) => {

    let item = req.query.searchItem;
    if (item) {
        let data = await MenuModel.find(
            {
                "$or": [
                    { itemName: { $regex: item, $options: 'i' } }
                ]
            }
        );

        if (data.length > 0) {

            res.send(data);
        } else {

            res.json({ result: "no such data found" })

        }
    } else {
        res.json({ result: 'please enter something to search' })
    }


}

module.exports = { ShowMenu, handleSearch,ShowItemsByCategory }