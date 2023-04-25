const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")

const adminSchema  = new mongoose.Schema({
    name : {
      type: String,
      required : true
    },
    email : {
        type: String,
        required : true,
        unique : true,
        match:/\S+@\S+\.\S+/
    },
    password : {
        type:String,
        required:true,
        minLength:8,
        maxLength:200,
        match:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,50}$/,
    },
    phoneNum : {
        type:String,
        required:true,
        unique :true,
        required:true,
        },
    status :{
        type :String,
        default : "Active",
        Enum: ["Active","Suspended","Blocked"]
    },
    role:{
        type : String
    },
    createdAT: {
        type : Date,
        default  : Date.now
    },
    updatedAt :{
        type: Date,
        default : Date.now()
    }
})
adminSchema.pre("save",function(next){
    let hashedPassword = bcrypt.hashSync(this.password,5);
    this.password = hashedPassword;
    next()
})
module.exports = mongoose.model("Admin",adminSchema)

