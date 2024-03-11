require('dotenv').config();
// lib's import
const express = require('express');

// routes import
const router = require('./router/routes');
const menurouter = require('./router/menu')
const Staffrouter = require('./router/StaffRoutes')

// db connection import
 require('./DB/conn');



const app = express();

// port
const port = process.env.PORT || 3000; 


// middleware       
app.use(express.json());
app.use('/resturent',router);
app.use('/dawat',menurouter);
app.use('/staff',Staffrouter)

app.get('/',(req,res)=>{
res.send('hello world');
});

app.listen(port,()=>{
    console.log(`your server running on ${port}`)
    
})