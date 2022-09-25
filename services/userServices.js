const UserModel = require("../model/userModel")
const AuthModel = require("../model/authModel")
const LoveModel = require("../model/loveModel")
const userServices = {
    register: ({ username, password, email }) => {
        return UserModel.create({
            username,
            password,
            email
        })
    },
    authCreate: ({ username }) => {
        return AuthModel.create({
            username
        })
    },
    login: (username, password) => {
        return UserModel.findOne({ username, password }, ['username', "email"]).sort({ username: -1 })
    },
    update: ({ username, password, email }, id) => {
        return UserModel.updateOne({ _id: id }, {
            username,
            password,
            email
        })
    },
    getUser: (_id) => {
        const id = _id ? { _id } : {}
        return UserModel.find(id, ["username", "email"])
    },
    getLove: (_id) => {
        return LoveModel.findOne({ user_id: _id })
    },
    setLove: (user_id, nav_id) => {
        return LoveModel.create({
            user_id,
            nav_id
        })
    }
}
module.exports = userServices