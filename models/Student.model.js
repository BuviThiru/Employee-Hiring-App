 const mongoose = require('mongoose');
 const Jobs = require('./Job..model');

 const studentSchema = new  mongoose.Schema({
    name : {
        type:String,
        required: true
    },
    courses:{
        type : [String],
        
    },
    eMail : {
        type : String,
        unique : true,
        required : true,
        match:/\S+@\S+\.\S+/
    },
    phone:{
        type : String,
        minLength  : 5,
        maxLength : 10,
        required: true,
    },
    skills : {
        type : [String],
        default : []
    },
    password : {
        type : String,
        required : true,
        match:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,50}$/,
    },
    education : {
        type: String
    },
    certifications:{
        type : [String]
    },
    resume : {
        type: String,
    },
    jobsApplied : {
        type : [String],
        ref : Jobs
    },
    createdAt:{
        type: Date,
        default :Date.now,
    },
    updatedAt: {
        type : Date,
        default: Date.now,
    }
 }) 

module.exports = mongoose.Model("Student", studentSchema)