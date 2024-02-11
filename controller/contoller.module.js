const UserModal = require('../models/User.model.js')



const Users = async (req, res) => {
    try {

        const { User_Phone_number, Visiting_count } = req.body;
        let result;
        let data = UserModal.findOne({ User_Phone_number }).then(
            async (resolve) => {
                if (resolve) {
                    res.send("you can login");
                } else if (!resolve) {
                    res.send("new user created")
                    data = UserModal({ User_Phone_number, Visiting_count })
                    result = await data.save();
                    console.log(result);
                }
            }
        ).catch((err) => {
            console.log(err)
        })


    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }

};

const getUsers = async (req, res) => {
    try {

        let data = UserModal.find(req.body);
        let result = await data
        res.send(result);
        console.log(result);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }

};

module.exports = { Users, getUsers }