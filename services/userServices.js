const UserModel = require("../model/userModel")
const userServices = {
    register: ({ username, password, email }) => {
        return UserModel.create({
            username,
            password,
            email
        })
    }
}
module.exports = userServices