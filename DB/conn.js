require('dotenv').config()
// lib's import
const mongoose = require('mongoose');

// url for mongodb
const url = process.env.DATABASE_URL 

try {
    mongoose.connect(url,{});
    console.log("connected to mongodb");
} catch (error) {
    console.log (error);
}

// mongoose.connect(url,{}).then(()=>{
//     console.log("connected to mongodb server");
// }).catch(err => {
//     console.log(err);
// });

module.exports = mongoose.connection;