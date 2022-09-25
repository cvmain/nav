const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const authSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    //用户的增改查权限
    user_auth: {
        type: Boolean,
        require: true,
        default: false
    },
    //导航的增改查权限
    nav_auth: {
        type: Boolean,
        require: true,
        default: false
    },
    //删除权限
    delete_auth: {
        type: Boolean,
        require: true,
        default: false
    },
    //最高权限
    final_auth: {
        type: Boolean,
        require: true,
        default: false
    }

})
const AuthModel = mongoose.model('auth_users', new mongoose.Schema(authSchema))
module.exports = AuthModel