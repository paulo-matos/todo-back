const restful = require('node-restful')
const mongoose = restful.mongoose

const registerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, default: Date.now }
})

module.exports = restful.model('Register', registerSchema)