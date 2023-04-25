const mongoose = require("mongoose");


const companySchema = new mongoose.Schema({
     CompanyName:{
        type : String,
        required : true,
     },	
ContactPersonName:  {
    type : String,
    required : true,
 },
 companyEmail:{
    type : String,
    unique : true,
    required : true,
    match:/\S+@\S+\.\S+/
},
	
contactPersonEmail : {
    type : String,
    unique : true,
    required : true,
    match:/\S+@\S+\.\S+/
},

companyAddress:{
    type : String,
    required : true,
},
	
password:{
    type : String,
    required : true,
    match:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,50}$/,
},
	
 contactPersonRole: {
    type : String,
    required : true,
},
role: {
    type : String,
required : true,
default : "company"
},
status: { 
	type: String,
	default: "Active",
	enum: ["Active", "Suspended", "Pending", "Blocked"]
},
companyWebsite: { 
   type: String,
	required: true,

},
companyRegistrationNumber: { 
	type: String,
	required: true,
},
jobs: {
    type : [mongoose.Types.ObjectId],
    ref : "Jobs"

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

module.exports = mongoose.model("Company",companySchema)