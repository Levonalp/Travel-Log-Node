const mongoose = require('mongoose')

const travelSchema = new mongoose.Schema ({
    name: String,
    cost: String,
    heritages: String,
    image: String
})

const Travel = mongoose.model('Travel', travelSchema)
module.exports = Travel