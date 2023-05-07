const Job = require("../models/Job.model")
const Company =require("../models/company.model")
const Student  = require("../models/Student.model")

exports.createJobSer=async(user,data)=>{
try{
    let response= {}
    if(user.role!= "company"){
      response.error = "User doesn't have required permissions"
    }
    let newJob= {
      title: data.title,     
      category: data.category,
      description:data.description,
      status : data.status,
      company_id: user._id,  
    }
  
    const job = await Job.create(newJob)
  
    if(job) {
         await Company.findOneAndUpdate(
            {_id:user._id},
            { $push: {
                jobs: job._id
            }}
         )
        
        response.job = job}
    else response.error = "Unable to create a new job"

    return response
}catch(err){
    return err.message
}
}


exports.applyJobSer = async(user,jobId) => {
  try{
    const response = {};
  if(user.role !== "student"){
    response.error = "User doesn't have required permissions"    
  }
  let job = await Job.findOneAndUpdate({_id:jobId} ,{
    $push:{applicants: user._id}
  })
  if(!job) {
    response.error = "Invalid job"
  }
  await Student.findOneAndUpdate({_id:user._id },{ $push: {jobsApplied:job._id}})
  return response;
  }catch(err){
    return err.message
  }
}