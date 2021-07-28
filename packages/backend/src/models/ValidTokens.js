const mongoose = require('mongoose')

const validTokenSchema = mongoose.Schema({
	token: {
		type: String
	}
})

module.exports = mongoose.model('ValidTokens', validTokenSchema)
