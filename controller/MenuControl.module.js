const MenuModel = require('../models/menu.model');
const CategorySchema = require('../models/CategoryMenu.model.js');


// controller for item by category
const ShowItemsByCategory = async (req, res) => {
    const category = await CategorySchema.findById(req.query.id);
    let categoryName = category.category;
    const data = await MenuModel.find({ category: { $regex: new RegExp(categoryName, 'i') } });
    const size = data.length ;
    
    res.json({
        status: "success",
        status_code: 200,
        message: "item fetched by id",
        categoryName,
        size,
        data
    });
}



// controller for searching items
const handleSearch = async (req, res) => {

    let item = req.query.searchItem;
    // console.log(item)    
    if (item) {
        // let data = await MenuModel.find({itemName:item});
        let data = await MenuModel.find(
            {
                "$or": [
                    { itemName: { $regex: item, $options: 'i' } }
                ]
            }
        );

        if (data.length > 0) {

            res.json({
                status: "failed",
                status_code: 400,
                message: "searched item fetched",
                data
            });
        } else {
            res.json({
                status: "failed",
                status_code: 400,
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