const Company =require("../models/company.model");
const Student  = require("../models/Student.model");
const Admin = require("../models/admin.model.js");

exports.getAllMembersSer = async(role)=>{
    try{
        let response = {}
    let users;
    if(role=="student") {users = await Student.find();}
    else if(role=="company")  {users = await Company.find();}
    else if(role=="admin")  {users = await Admin.find();}
    else response.error = "Category not found"
    if(!users){
        response.error = "List not found"
    }else {
        response.users = users
    }
    return response
    }catch(err){
        console.log(err.message)
    }
}

exports.deleteMemberSer = async(role,id)=>{
    try{
        console.log("inservice")
        let response = {} 
        const deleteFun = function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Deleted User : ", docs);
            }
        }       
    let deletedUsers;
    if(role=="student") {deletedUsers = await Student.findOneAndDelete({_id:id})}
    else if(role=="company")  {deletedUsers = await Company.findOneAndDelete({_id:id},deleteFun(err,data));}
    else if(role=="admin")  {deletedUsers = await Admin.findOneAndDelete({_id:id},deleteFun(err,data));}
    else response.error = "Category not found"
    console.log("??????????????????????",deletedUsers)
    if(!deletedUsers){
        response.error = "List not found"
    }else {
        response.users = deletedUsers
    }
    return response
    }catch(err){
        console.log(err.message)
    }
}