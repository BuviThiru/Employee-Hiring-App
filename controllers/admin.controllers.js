const {getAllMembersSer,deleteMemberSer} = require('../services/admin.services')

exports.getAllMembers = async(req,res)=>{
    try{
        let response = await getAllMembersSer(req.params.category)
        if(response.error || !response){
            return res.status(401).send({
                message:"Couldn't fetch the data",
                error: response.error
            })
        }else{
            return res.status(201).send({
                message:" Received the requested list",
                result: response.users
            })
    }}
    catch(err){
        return  err.message
    }
}

exports.deleteMember =async(req,res)=>{
    try{
        console.log(req.params.role,req.params.id)
        let response = await deleteMemberSer(req.params.role,req.params.id)
        if(response.error || !response){
            return res.status(401).send({
                message:"Couldn't fetch the data",
                error: response.error
            })
        }else{
            return res.status(201).send({
                message:" Deleted the user sucessfully",
                result: response.users
            })
    }}
    catch(err){
        return  err.message
    }}