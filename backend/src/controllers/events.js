const { ObjectId } = require('mongoose').Types
const getTokenPayload = require('../helpers/getTokenPayload')
const Event = require('../models/Event')

const getAllEvents = async (req, res) => {
	try {
		const { userId } = getTokenPayload(req)
		const allEvents = await Event.find({ user: userId }).populate(
			'user',
			'name'
		)

		res.status(200).json({
			ok: true,
			events: allEvents
		})
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'unexpected error'
		})
	}
}

const getEvent = async (req, res) => {
	try {
		const eventId = req.params.eventId
		const findedEvent = await Event.find({ _id: eventId }).populate(
			'user',
			'name'
		)

		res.status(200).json({
			ok: true,
			event: findedEvent
		})
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'unexpected error'
		})
	}
}

const createEvent = async (req, res) => {
	try {
		const { title, notes, startDate, endDate } = req.body
		const { userId } = getTokenPayload(req)

		const newEvent = await new Event({
			title,
			notes,
			startDate,
			endDate,
			user: ObjectId(userId)
		}).save()

		res.status(200).json({
			ok: true,
			event: newEvent
		})
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'unexpected error'
		})
	}
}

const editEvent = async (req, res) => {
	try {
		const eventId = req.params.eventId
		const { title, notes, startDate, endDate } = req.body

		const eventEdited = await Event.findByIdAndUpdate(
			{ _id: eventId },
			{
				title,
				notes,
				startDate,
				endDate
			},
			{
				new: true
			}
		)

		if (!eventEdited) {
			return res.status(404).json({
				ok: false,
				msg: 'event not found'
			})
		}

		res.status(200).json({
			ok: true,
			event: eventEdited
		})
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'unexpected error'
		})
	}
}

const deleteEvent = async (req, res) => {
	try {
		const eventId = req.params.eventId
		const deletedEvent = await Event.findByIdAndRemove({ _id: eventId })
		if (!deletedEvent) {
			return res.status(404).json({
				ok: false,
				msg: 'event not found'
			})
		}

		res.status(200).json({
			ok: true,
			msg: 'event deleted successfully'
		})
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'unexpected error'
		})
	}
}

module.exports = {
	getAllEvents,
	getEvent,
	createEvent,
	editEvent,
	deleteEvent
}
