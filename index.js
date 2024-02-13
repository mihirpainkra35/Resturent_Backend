// require('dotenv').config()
// lib's import
const express = require('express');

// routes import
// const routes = require('./router/routes.js')

// db connection import
// require('./DB/conn.js')

const app = express();

// port
const port = process.env.PORT || 3000; 


// middleware       
app.use(express.json());
// app.use('/resturent',routes)

app.get('/',(req,res)=>{
res.send('hello world');
});

app.listen(port,()=>{
    console.log(`your server running on ${port}`)
    
})