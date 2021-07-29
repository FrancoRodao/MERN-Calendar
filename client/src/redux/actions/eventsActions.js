import { types } from '../types'
import { errorMessages } from '../../helpers/messages'
import EventsService from '../../api/events'

import { setErrorAction } from './uiActions'

export const startLoadEvents = () => {
	return dispatch =>
		EventsService.getAllEvents()
			.then(({ data }) => dispatch(loadEvents(data.events)))
			.catch(() =>
				dispatch(setErrorAction(errorMessages.FAILED_TO_LOAD_EVENTS))
			)
}

export const loadEvents = events => ({
	type: types.loadEvents,
	payload: {
		events
	}
})

export const setActiveEventAction = event => ({
	type: types.eventSetActive,
	payload: {
		event
	}
})

export const setActiveSlotAction = slot => ({
	type: types.setActiveSlot,
	payload: {
		slot: {
			date: slot.date,
			dateStr: slot.dateStr,
			allDay: slot.allDay
		}
	}
})

export const startAddNewEventAction = event => {
	return dispatch => {
		EventsService.createEvent(event)
			.then(res => dispatch(addNewEventAction(res.data.event)))
			.catch(err => err)
	}
}

export const addNewEventAction = event => ({
	type: types.eventAddNew,
	payload: {
		event
	}
})

export const startEditEventAction = (eventEdited, eventId) => {
	return dispatch => {
		EventsService.editEvent(eventEdited, eventId)
			.then(res => dispatch(editEventAction(res.data.event)))
			.catch(err => err)
	}
}

export const editEventAction = event => ({
	type: types.eventEdit,
	payload: {
		event
	}
})

export const startDeleteEventAction = eventId => {
	return dispatch => {
		EventsService.deleteEvent(eventId)
			.then(res => res.data.ok && dispatch(deleteEventAction(eventId)))
			.catch(e => e)
	}
}

export const deleteEventAction = eventId => ({
	type: types.eventDelete,
	payload: {
		eventId
	}
})
