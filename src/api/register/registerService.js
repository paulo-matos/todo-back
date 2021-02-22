const Register = require('./register')

Register.methods(['get', 'post', 'put', 'delete'])

Register.updateOptions({new: true, runValidators: true})

module.exports = Register