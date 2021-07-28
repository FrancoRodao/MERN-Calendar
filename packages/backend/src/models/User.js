const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
})

UserSchema.pre('save', function (next) {
	bcrypt.hash(this.password, 10, (err, hash) => {
		if (err) {
			throw err
		}

		this.password = hash
		next()
	})
})

UserSchema.methods.isCorrectPassword = async (password, hash) => {
	return await bcrypt
		.compare(password, hash)
		.then(res => res)
		.catch(err => {
			throw err
		})
}

const User = mongoose.model('User', UserSchema)

module.exports = User
