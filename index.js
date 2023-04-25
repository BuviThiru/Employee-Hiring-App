const express = require("express");
const app = express();
const mongoose = require('mongoose')
const dbURL = require('./config/db.config')

const bodyParser = require("body-parser");
const {port} = require('./config/server.config')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const signupRoutes = require('./routes/routes');
signupRoutes(app)

app.listen(port,()=>{
    console.log("Server Listening to the port : ",port)
    mongoose.connect(dbURL)
})