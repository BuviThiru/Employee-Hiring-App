const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({  
title: {
    type:String,
    required: true
},

category: {
    type:String,
    required: true
},

description:{
    type:String,
    required: true
},
status:
{
    type : String,
    enums : ["Open", "Close"],
    default :"Open"
},
company_id: {
    type : [mongoose.Types.ObjectId],
    ref :"Company"
}, 

applicants:
{
    type : [mongoose.Types.ObjectId],
    ref :"Student"
}, 
createdAT: {
    type : Date,
    default  : Date.now
},
updatedAt :{
    type: Date,
    default : Date.now
}
})

module.exports = mongoose.Model("Job",jobSchema)