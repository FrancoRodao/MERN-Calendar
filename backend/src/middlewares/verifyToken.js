const jwt = require('jsonwebtoken')
const ValidTokens = require('../models/ValidTokens')

const verifyToken = (req, res, next) => {
	try {
		if (!req.header('Authorization')) {
			return res.status(401).json({
				ok: false,
				msg: 'Token required'
			})
		}

		const token = req.header('Authorization').split(' ')[1]

		if (!token) {
			return res.status(401).json({
				ok: false,
				msg: 'Token required'
			})
		}

		jwt.verify(token, process.env.SECRET_KEY, async err => {
			if (err) {
				return res.status(401).json({
					ok: false,
					msg: 'Invalid token'
				})
			}

			//refresh tokens should only be used to refresh the access token
			const isRefreshToken = await ValidTokens.findOne({ token })
			if (isRefreshToken) {
				return res.status(401).json({
					ok: false,
					msg: 'invalid token'
				})
			}

			next()
		})
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: 'unexpected error'
		})
	}
}

module.exports = verifyToken
