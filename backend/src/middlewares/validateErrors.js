const { validationResult } = require('express-validator')

const validateErrors = (res, req, next) => {
	const result = validationResult(req)
	if (!result.isEmpty()) {
		return res.status(400).json({
			ok: false,
			msg: result.errors[0].msg,
			allErrors: result.mapped()
		})
	}

	next()
}

module.exports = validateErrors
