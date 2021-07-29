const { body } = require('express-validator')

const emailValidations = [
	body('email', 'email is required').not().isEmpty({
		ignore_whitespace: true
	}),
	body('email', 'email format is not valid').isEmail()
]

const passwordValidations = [
	body('password', 'password is required').not().isEmpty({
		ignore_whitespace: true
	}),
	body('password', 'password must have at least 6 characters').isLength({
		min: 6
	})
]

const eventCreateValidations = [
	body('title', 'title is required').not().isEmpty({
		ignore_whitespace: true
	}),
	body('notes', 'notes must be an string').isString(),
	body('startDate', 'startDate is required').not().isEmpty({
		ignore_whitespace: true
	}),
	body('endDate', 'endDate is required').not().isEmpty({
		ignore_whitespace: true
	})
]

module.exports = {
	emailValidations,
	passwordValidations,
	eventCreateValidations
}
