const Company = require("../models/company.model.js")

exports.signupCompany = async (data) => {
  try{
    let newUSer = {
        CompanyName: data.CompanyName,
        ContactPersonName: data.ContactPersonName,
        companyEmail: data.companyEmail,
        contactPersonEmail: data.contactPersonEmail,
        companyAddress: data.companyAddress,
        password: data.password,
        contactPersonRole: data.contactPersonRole,
        role: data.role,
        status: data.status,
        companyWebsite: data.companyWebsite,
        companyRegistrationNumber: data.companyRegistrationNumber,
      };
      const response = await Company.create(newUSer)
      return response
  }catch(err){
    console.log(err.message)
  }

};
