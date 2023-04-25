 const mongoose = require('mongoose');
 const Jobs = require('./Job.model');
 const bcrypt = require("bcryptjs")


 const studentSchema = new  mongoose.Schema({
    name : {
        type:String,
        required: true
    },
    courses:{
        type : [String],
        
    },
    role:{
        type:String,
        required: true,
        default : "student",
    },
    email : {
        type : String,
        unique : true,
        required : true,
        match:/\S+@\S+\.\S+/
    },
    phoneNum:{
        type : String,
        minLength  : 5,
        maxLength : 10,
        required :true,
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
studentSchema.pre("save",function(next){
    let hashedPassword = bcrypt.hashSync(this.password,5);
    this.password = hashedPassword;
    next();
})

module.exports = mongoose.model("Student",studentSchema)