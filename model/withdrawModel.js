const mongoose = require('mongoose')

const withdrawlSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    name: {
        type: String
    },
    withdrawl_balance: {
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


module.exports = mongoose.model('withdrawl' , withdrawlSchema)