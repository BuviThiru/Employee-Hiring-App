const {selectServiceByRole,selectSignInServiceByRole} = require('../middleware/selectServiceByRole')

exports.signupBasedOnRole = async(req,res) => {
    try{
    const response = await selectServiceByRole(req.params.role,req.body);   
    console.log(response)
    if(!response){
        return res.status(501).send({
            result : "Failed to signup"
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

exports.signinBasedOnRole = async(req,res)=>{
    try{
        const response = await selectSignInServiceByRole(req.params.role,req.body);   
         console.log("RESPOSE",response)
        if(!response || response.error){
            return res.status(501).send({
                result : "Failed to signIn",
                Error : response.error
            })
        }else{
            return res.status(200).send({
                message : "User Authenticated",
                token : response.token
            })
        }
        }catch(err){
            console.log(err)
        }
}