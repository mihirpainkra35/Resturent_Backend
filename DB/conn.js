// lib's import
const mongoose = require('mongoose');
// url for mongodb
const url = 'mongodb://127.0.0.1:27017/Resturent_DB';
const url1 = 'mongodb+srv://mihir:mihir@cluster0.8t9h3md.mongodb.net/Resturent_DB?retryWrites=true&w=majority';

mongoose.connect(url1,{}).then(()=>{
    console.log("connected to mongodb server");
}).catch(err => {
    console.log(err);
});

module.exports = mongoose.connection;