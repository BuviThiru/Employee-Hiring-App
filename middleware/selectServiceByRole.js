const {signupAdmin,signupCompany,signupStudent} = require("../services/signup.services")
const {signinAdmin,signinCompany,signinStudent} = require("../services/signin.services")
async  function selectServiceByRole(role,data){
    try{
        console.log("ROLE",role)
    if(role=="company") return await signupCompany(role,data);
    else if(role=="student") return await signupStudent(role,data);
    else if(role=="admin") return await  signupAdmin(role, data)
    else return "Error-Select Appropriate category"
    }catch(err){
        console.log(err.message)
        return err.message
    }
}

async  function selectSignInServiceByRole(role,data){
    try{
        console.log(">>>>>>>>>>>ROLE",role)
    if(role=="company") return await signinCompany(role,data);
    else if(role=="student") return await signinStudent(role,data);
    else if(role=="admin") return await  signinAdmin(role, data)
    else return "Error-Select Appropriate category"
    }catch(err){
        console.log(err.message)
        return err.message
    }
}
module.exports = {selectServiceByRole,selectSignInServiceByRole};