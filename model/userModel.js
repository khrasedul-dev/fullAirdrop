const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    name: {
        type: String
    },
    balance: {
        type: String
    },
    referr_id:{
        type: String
    },
    referr_by:{
        type: String
    },
    referralCount: {
        type: String
    },
    ref_link:{
        type: String
    },
    wallet: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date
    }

},{versionKey: false})


module.exports = mongoose.model('user' , userSchema)