
// lib's import
const mongoose = require('mongoose');

// url for mongodb
const url = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/Resturent_DB'


mongoose.set("strictQuery",false);

         mongoose.connect(url).then(()=>{
            console.log("mongodb connection successful");
         }).catch(error=>{
            console.log(error);
         });
       
 


module.exports = mongoose.connection;