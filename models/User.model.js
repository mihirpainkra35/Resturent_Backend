const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    User_Phone_number:Number,
    OTP: Number,
    Visiting_count:Number
})

module.exports = mongoose.model('users',UserSchema);