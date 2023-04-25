const {selectServiceByRole} = require('../middleware/selectServiceByRole')

exports.signupBasedOnRole = async(req,res) => {
    try{
    console.log(req.params,req.body)
    const response = await selectServiceByRole(req.params.role,req.body);   
    console.log(response)
    if(response.error){
        return res.status(501).send({
            result : response.error
        })
    }else{
        return res.status(200).send({
            result : response
        })
    }
    }catch(err){
        console.log(err)
    }
    
}