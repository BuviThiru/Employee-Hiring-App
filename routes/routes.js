const {signupBasedOnRole,signinBasedOnRole} = require('../controllers/signup.controller');
const {createJob,applyJob} = require("../controllers/jobs.controller")
const {isAuthenticated,isAdmin} = require("../middleware/authMiddleware")
const {getAllMembers,deleteMember} = require("../controllers/admin.controllers")

const route = (app) => {
    app.post("/employeeHiring/api/vi/signup/:role" , signupBasedOnRole)
    app.post("/employeeHiring/api/vi/signin/:role" , signinBasedOnRole)
    app.post("/employeeHiring/api/vi/createjob/" , isAuthenticated,createJob)
    app.post("/employeeHiring/api/vi/applyjob/:id",isAuthenticated,applyJob)
    app.get('/employeeHiring/api/vi/getallmembers/:category',isAuthenticated,isAdmin,getAllMembers)
    app.delete('/employeeHiring/api/vi/deletemember/:role/:id',isAuthenticated,isAdmin,deleteMember)
}
module.exports = route