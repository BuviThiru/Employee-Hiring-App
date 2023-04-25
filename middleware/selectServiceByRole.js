const {signupAdmin,signupCompany,signupStudent} = require("../services/signup.services")
async  function selectServiceByRole(role,data){
    if(role=="company") return await signupCompany(data);
    else if(role=="student") return await signupStudent(data);
    else if(role=="admin") return await  signupAdmin(data)
    else return "error1"
}
module.exports = {selectServiceByRole};