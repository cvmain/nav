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
        return UserModel.findOne({ username, password }, ['username', "email"]).sort({ username: -1 })
    }
}
module.exports = userServices