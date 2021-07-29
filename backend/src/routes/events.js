const express = require('express')
const {
	getAllEvents,
	createEvent,
	getEvent,
	deleteEvent,
	editEvent
} = require('../controllers/events')
const validateErrors = require('../middlewares/validateErrors')
const { eventCreateValidations } = require('../middlewares/validations')
const verifyToken = require('../middlewares/verifyToken')

const router = express.Router()

router.get('/all', verifyToken, getAllEvents)

router.get('/:eventId', verifyToken, getEvent)

router.post(
	'/',
	[
		verifyToken,
		eventCreateValidations,
		(req, res, next) => validateErrors(res, req, next)
	],
	createEvent
)

router.put(
	'/:eventId',
	[
		verifyToken,
		eventCreateValidations,
		(req, res, next) => validateErrors(res, req, next)
	],
	editEvent
)

router.delete('/:eventId', verifyToken, deleteEvent)

module.exports = router
