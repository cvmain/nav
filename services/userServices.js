const UserModel = require("../model/userModel")
const userServices = {
    register: ({ username, password, email }) => {
        return UserModel.create({
            username,
            password,
            email
        })
    },
    login: (username, password) => {
        return UserModel.find({
            username,
            password
        })
    }
}
module.exports = userServices