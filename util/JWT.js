const jwt = require("jsonwebtoken")
const jwtSecret = "b6e64758-d6d7-5a0a-2f3d-056c776967fb"
const JWT = {
    generator() {
        jwt.sign({
            username: result.username,
            _id: result._id
        }, jwtSecret, { expiresIn: '1h' })
    },
    verify(token) {
        try {
            return jwt.verify(token, jwtSecret)
        } catch (err) {
            return false
        }
    }
}
module.exports = JWT