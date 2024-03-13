const CategorySchema = require("../models/CategoryMenu.model");

const ShowCategory = async(req, res) => {

    try {
        const data = await CategorySchema.find();
        res.status(200).json({
            status:"success",
            status_code:200,
            message:"category of fetched with category url",
            data
        });

    } catch (error) {
        console.log(error)
    }


}

module.exports = { ShowCategory }