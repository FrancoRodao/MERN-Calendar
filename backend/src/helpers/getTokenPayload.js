const jwt = require('jsonwebtoken')

const getTokenPayload = req => {
	const token = req.header('Authorization').split(' ')[1]
	const { _id, name } = jwt.decode(token)

	return {
		userId: _id,
		userName: name
	}
}

module.exports = getTokenPayload
