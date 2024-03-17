const MenuModel = require('../models/menu.model');
const CategorySchema = require('../models/CategoryMenu.model.js');


// controller for item by category
const ShowItemsByCategory = async (req, res) => {
    const category = await CategorySchema.findById(req.query.id);
    let categoryName = category.category;
    console.log(categoryName);
    const data = await MenuModel.find({category: { $regex: new RegExp(categoryName, 'i') }});
   

    res.json({
        status: "success",
        status_code: 200,
        message: "item fetched by id",
        data
    });
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

            res.json({
                status: "success",
                status_code: 200,
                message: "searched item fetched",
                data
            });
        } else {
            res.json({
                status: "success",
                status_code: 200,
                result: "no such data found",

            });


        }
    } else {
        res.json({
            status: "success",
            status_code: 200,
            result: "please enter something to search",

        });

    }


}

module.exports = { handleSearch, ShowItemsByCategory }