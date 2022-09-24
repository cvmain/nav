const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "用户名重复"]
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    create_time: {
        type: Date,
        require: true,
        default: Date.now
    }

})
const UserModel = mongoose.model('nav_users', new mongoose.Schema(UserSchema))
module.exports = UserModel