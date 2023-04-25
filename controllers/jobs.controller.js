const {createJobSer,applyJobSer} = require("../services/job.service")
exports.createJob = async(req,res) =>{
     try{
        const response = await createJobSer(req.user,req.body)
        console.log(response)
        if(response.error || !response){
            return res.status(401).send({
                message:"Jobnot updated",
                error: response.error
            })
        }else{
            return res.status(201).send({
                message:"Job Created",
                result: response.job
            })
        }
     }catch(err){
        console.log(err)
     }

  
}

exports.applyJob = async(req,res)=>{
    try{
        const response = await applyJobSer(req.user,req.params.id)
        console.log(response)
        if(response.error || !response){
            return res.status(401).send({
                message:"Couldn't apply to the job specified",
                error: response.error
            })
        }else{
            return res.status(201).send({
                message:"Applied to the job",
                result: response.job
            })
        }
     }catch(err){
        console.log(err)
     }

}