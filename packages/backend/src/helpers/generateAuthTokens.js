const jwt = require('jsonwebtoken')
const ValidTokens = require('../models/ValidTokens')

const generateAsyncTokens = (_id, name) => {
	const accessToken = new Promise((resolve, reject) => {
		jwt.sign(
			{ _id, name },
			process.env.SECRET_KEY,
			{ expiresIn: '15s' },
			(err, token) => {
				if (err) reject(err)

				resolve(token)
			}
		)
	})

	const refreshToken = new Promise((resolve, reject) => {
		jwt.sign(
			{ _id, name },
			process.env.SECRET_KEY,
			{ expiresIn: '30d' },
			async (err, refreshToken) => {
				if (err) reject(err)

				await new ValidTokens({ token: refreshToken }).save()
				resolve(refreshToken)
			}
		)
	})

	return Promise.all([accessToken, refreshToken])
}

const generateAuthTokens = async function (_id, name) {
	const [accessToken, refreshToken] = await generateAsyncTokens(_id, name)

	return {
		accessToken,
		refreshToken
	}
}

module.exports = generateAuthTokens
