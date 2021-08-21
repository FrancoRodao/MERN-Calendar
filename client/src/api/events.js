import instance from './instance'

const getAllEvents = () => instance.get('/events/all')

const getEvent = eventId => instance.get(`/events/${eventId}`)

const createEvent = ({ title, notes, startDate, endDate }) =>
	instance.post('/events', {
		title,
		notes,
		startDate,
		endDate
	})

const editEvent = ({ title, notes, startDate, endDate }, eventId) =>
	instance.put(`/events/${eventId}`, {
		title,
		notes,
		startDate,
		endDate
	})

const deleteEvent = eventId => instance.delete(`/events/${eventId}`)

export const EventsService = {
	getAllEvents,
	getEvent,
	createEvent,
	editEvent,
	deleteEvent
}
