const jwt = require("jsonwebtoken")
const jwtSecret = "b6e64758-d6d7-5a0a-2f3d-056c776967fb"
const JWT = {
    verify(token) {
        try {
            return jwt.verify(token, jwtSecret)
        } catch (err) {
            return false
        }
    }
}
module.exports = JWT