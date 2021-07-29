const express = require('express')
const { renewToken, register, login, logout } = require('../controllers/auth')
const { body } = require('express-validator')
const {
	emailValidations,
	passwordValidations
} = require('../middlewares/validations')
const validateErrors = require('../middlewares/validateErrors')

const router = express.Router()

router.post(
	'/login',
	[
		emailValidations,
		passwordValidations,
		(req, res, next) => validateErrors(res, req, next)
	],
	login
)

router.post(
	'/register',
	[
		body('name', 'name is required').not().isEmpty({
			ignore_whitespace: true
		}),
		emailValidations,
		passwordValidations,
		(req, res, next) => validateErrors(res, req, next)
	],
	register
)

router.delete('/logout', logout)

router.get('/renewToken', renewToken)

module.exports = router
