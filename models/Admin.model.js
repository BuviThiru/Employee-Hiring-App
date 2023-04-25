const mongoose = require('mongoose');

const adminSchema  = new mongoose.Schema({
    name : {
      type: String,
      required : true
    },
    eMail : {
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
        unique :true
        },
    status :{
        type :Enum,
        default : Active,
        Enums: [Active,Suspended,Blocked]
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

module.exports = mongoose.Model("Admin", adminSchema)