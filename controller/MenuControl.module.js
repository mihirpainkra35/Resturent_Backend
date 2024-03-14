const MenuModel = require('../models/menu.model');



// controller for item by category
const ShowItemsByCategory = async (req, res) => {
    const itemByCategory = await MenuModel.aggregate([
        {
            $group: {
                _id: { $toLower: "$category" },
                items: { $push: "$$ROOT" }
            },

        },

    ]);
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