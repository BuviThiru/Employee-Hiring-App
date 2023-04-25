const Company = require("../models/company.model.js");
const Student = require("../models/Student.model.js");
const Admin = require("../models/admin.model.js");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
require('dotenv').config();


exports.signinAdmin = async(role,data)=>{
    let response = {}
    const AdminFromDB = await Admin.findOne({email : data.email})
    if(!AdminFromDB)  response.error = "Email Invalid"
    else {
        let passwordCheck = await bcrypt.compareSync(data.password,AdminFromDB.password)
        if(!passwordCheck)  response.error = "Invalid Password"
        else{
            let token = jwt.sign({email:data.email},process.env.SECRET_KEY)
             response.token = token
        }
    }
return response;
}

exports.signinCompany = async(role,data)=>{
    let response = {}
    const AdminFromDB = await Company.findOne({email : data.email})
    if(!AdminFromDB)  response.error = "Email Invalid"
    else {
        let passwordCheck = await bcrypt.compareSync(data.password,AdminFromDB.password)
        if(!passwordCheck)  response.error = "Invalid Password"
        else{
            let token = jwt.sign({email:data.email},process.env.SECRET_KEY)
             response.token = token
        }
    }
return response;
    
}

exports.signinStudent = async(role,data)=>{
    let response = {}
    const AdminFromDB = await Student.findOne({email : data.email})
    if(!AdminFromDB)  response.error = "Email Invalid"
    else {
        let passwordCheck = await bcrypt.compareSync(data.password,AdminFromDB.password)
        if(!passwordCheck)  response.error = "Invalid Password"
        else{
            let token = jwt.sign({email:data.email},process.env.SECRET_KEY)
             response.token = token
        }
    }
return response;
    
}