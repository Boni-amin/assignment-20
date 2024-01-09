const express = require('express');
const router = require('./src/routes/api');
const app = new express();


const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');

const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
const path = require("path");



let URL="mongodb+srv://mern-ecommerce:<password>@cluster0.bifxoxg.mongodb.net/assignment20";
let option={user:'mern-ecommerce',pass:"mern1234",autoIndex:true};
mongoose.connect(URL,option).then((res)=>{
    console.log("Database Connected Succeess...")
}).catch((err)=>{
    console.log(err)
})


app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
// Set up middleware for parsing JSON
app.use(express.json());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


const limiter= rateLimit({windowMs:15*60*1000,max:3000});
app.use(limiter);


app.set('etag', false); // turn off  / Cass data off 
// Add Backend Routing 
app.use("/api/v1",router);



module.exports=app;
