const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const LoveSchema = new Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    nav_id: {
        type: String,
        required: true
    },
    add_time: {
        type: Date,
        require: true,
        default: Date.now
    }

})
const LoveModel = mongoose.model('love', new mongoose.Schema(LoveSchema))
module.exports = LoveModel