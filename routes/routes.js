const {signupBasedOnRole} = require('../controllers/signup.controller')

const route = (app) => {
    app.post("/employeeHiring/api/vi/signup/:role" , signupBasedOnRole)
}
module.exports = route;