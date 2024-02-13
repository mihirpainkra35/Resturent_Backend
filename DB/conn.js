require('dotenv').config()
// lib's import
const mongoose = require('mongoose');

// url for mongodb
const url = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/Resturent_DB'


mongoose.connect(url,{}).then(()=>{
    console.log("connected to mongodb server");
}).catch(err => {
    console.log(err);
});

module.exports = mongoose.connection;