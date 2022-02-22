const mongoose = require('mongoose')

const settingSchema = new mongoose.Schema({

    join_bounus: {
        type: String
    },
    referral_bounus: {
        type: String
    },
    airdrop_status: {
        type: String
    },
    coin_name: {
        type: String
    }

},{versionKey: false})

module.exports = mongoose.model('setting' , settingSchema)