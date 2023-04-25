
const Company = require("../models/company.model.js");
const Student = require("../models/Student.model.js");
const Admin = require("../models/admin.model.js");
const jwt = require("jsonwebtoken")
require('dotenv').config();
exports.verifytoken = (tokenSent)=>{
    try{
        const isverified = jwt.verify(tokenSent,process.env.SECRET_KEY)
        return isverified;

    }catch(err){
        console.log(err)
        return ;
    }
}

exports.getUserByEmail= async(emailData)=>{
    try{
        const user = await Student.findOne({email:emailData}) ||  await Admin.findOne({email:emailData}) ||  await Company.findOne({email:emailData})
     
        return user
    }catch(err){
        return err.message
    }
  
}