const Company = require("../models/company.model.js");
const Student = require("../models/Student.model.js");
const Admin = require("../models/admin.model.js")

exports.signupCompany = async (role,data) => {
  try{
    console.log("IN COMPANY")
    let newUSer = {
        CompanyName: data.CompanyName,
        ContactPersonName: data.ContactPersonName,
        email: data.email,
        contactPersonEmail: data.contactPersonEmail,
        companyAddress: data.companyAddress,
        password: data.password,
        contactPersonRole: data.contactPersonRole,
        role: role,
        status: data.status,
        companyWebsite: data.companyWebsite,
        companyRegistrationNumber: data.companyRegistrationNumber,
      };
      const response = await Company.create(newUSer)
      return response
  }catch(err){
    console.log(err.message)
    return err.message
  }

};

exports.signupStudent = async (role,data) => {
    console.log("STUDEN",data)
    try{
      let newUSer = {
        name : data.name,    
        courses: data.courses,
        email : data.email,
        phoneNum:data.phoneNum,
        skills : data.skills,
        password : data.password,
        education : data.education,
        certifications:data.certifications,
        resume : data.resume,
        jobsApplied : data.jobsApplied,
        role:role,
        };
        const response = await Student.create(newUSer)
        return response
    }catch(err){
      console.log(err.message)
    }
  
  };

  exports.signupAdmin = async (role, data) => {
    try{
      let newUSer = {
          name : data.name,
          email : data.email,          
          password : data.password,    
          phoneNum : data.phoneNum,
          status : data.status,
          role: role,
          
          }
        const response = await Admin.create(newUSer)
        return response
    }catch(err){
      console.log(err.message)
    }
  
  };