const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
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
const UserModel = mongoose.model('user', new mongoose.Schema(UserSchema))
module.exports = UserModel