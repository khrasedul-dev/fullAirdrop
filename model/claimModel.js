const mongoose = require('mongoose')

const claimSchema = new mongoose.Schema({
    userId : {
        type: String
    },
    time: {
        type: String
    }
},{versionKey: false})

module.exports = mongoose.model('claim_reward',claimSchema)