require('dotenv').config();
// lib's import
const express = require('express');

// routes import
const router = require('./router/routes');
const menurouter = require('./router/menu')
const Staffrouter = require('./router/StaffRoutes')
const orderRoute = require('./router/order');

// db connection import
 require('./DB/conn');



const app = express();

// port
const port = process.env.PORT || 3000; 


// middleware       
app.use(express.json());
app.use('/dawat',router);
app.use('/dawat',menurouter);
app.use('/dawat',Staffrouter);
app.use('/dawat',orderRoute);

app.get('/',(req,res)=>{
res.send('hello world');
});

app.listen(port,()=>{
    console.log(`your server running on ${port}`)
    
})