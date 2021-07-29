const jwt = require('jsonwebtoken')
const User = require('../models/User')
const ValidTokens = require('../models/ValidTokens')
const { request } = require('express')
const generateAuthTokens = require('../helpers/generateAuthTokens')

const login = async (req, res) => {
	const { email, password } = req.body

	try {
		const user = await User.findOne({ email })
		if (!user) {
			return res.status(401).json({
				ok: false,
				msg: 'User not found'
			})
		}

		if (await user.isCorrectPassword(password, user.password)) {
			const { accessToken, refreshToken } = await generateAuthTokens(
				user._id,
				user.name
			)

			return res
				.cookie('refreshTokenCookie', refreshToken, {
					httpOnly: true,
					sameSite: 'strict',
					secure: true,
					maxAge: 60 * 60 * 24 * 30 // 30 days
				})
				.status(200)
				.json({
					ok: true,
					msg: 'logged successfully',
					user,
					accessToken
				})
		}

		res.status(401).json({
			ok: false,
			msg: 'Invalid email or password'
		})
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'unexpected error'
		})
	}
}

const logout = async (req = request, res) => {
	try {
		const { refreshTokenCookie } = req.cookies
		await ValidTokens.findOneAndDelete({ token: refreshTokenCookie })

		res.clearCookie('refreshTokenCookie').status(200).json({
			ok: true,
			msg: 'token deleted'
		})
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'unexpected error'
		})
	}
}

const register = async (req, res) => {
	const { name, email, password } = req.body
	try {
		const emailExists = await User.findOne({ email })
		if (emailExists) {
			return res.status(401).json({
				ok: false,
				msg: 'Email is already register'
			})
		}

		const user = new User({
			name,
			email,
			password
		})
		await user.save()

		res.status(201).json({
			ok: true,
			msg: 'user created',
			user
		})
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'unexpected error when creating user'
		})
	}
}

const renewToken = async (req, res) => {
	try {
		//refresh token
		const { refreshTokenCookie } = req.cookies
		if (!refreshTokenCookie) {
			return res.status(401).json({
				ok: false,
				msg: 'Invalid refresh token'
			})
		}

		const isValidToken = await ValidTokens.findOne({
			token: refreshTokenCookie
		})
		if (!isValidToken) {
			return res.status(401).json({
				ok: false,
				msg: 'Invalid token - token not found'
			})
		}

		jwt.verify(
			refreshTokenCookie,
			process.env.SECRET_KEY,
			async (err, decode) => {
				if (err) {
					return res.status(401).json({
						ok: false,
						msg: 'Invalid refresh token'
					})
				}

				const { _id, name } = decode
				//delete old token - invalidate old token
				await ValidTokens.findOneAndDelete({ token: refreshTokenCookie })

				if (_id !== undefined && _id !== null) {
					const { accessToken, refreshToken } = await generateAuthTokens(
						_id,
						name
					)

					return res
						.cookie('refreshTokenCookie', refreshToken, {
							httpOnly: true,
							sameSite: 'strict',
							secure: true,
							maxAge: 60 * 60 * 24 * 30 // 30 days
						})
						.status(200)
						.json({
							ok: true,
							_id,
							name,
							accessToken
						})
				}

				res.status(500).json({
					ok: false,
					msg: 'unexpected error'
				})
			}
		)
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'unexpected error'
		})
	}
}

module.exports = {
	login,
	logout,
	register,
	renewToken
}
