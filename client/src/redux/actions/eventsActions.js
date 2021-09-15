import { toast } from 'react-toastify'

import { types } from '../types'
import { errorMessages } from '../../helpers/messages'
import { EventsService } from '../../api/events'

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

export const startEditEventAction = (oldEvent, eventEdited, eventId) => {
	return dispatch => {
		/*
			you should have the events synced with the local state
			(at least when editing the event) NOT with the backend 
			state because otherwise the events are duplicated 
			(fullcalendar drop event bug)
			https://github.com/fullcalendar/fullcalendar-react/issues/120
		*/
		EventsService.editEvent(eventEdited, eventId).catch(err => {
			//401 --> refreshing token
			if (err.response.status !== 401) {
				console.log(err.response)
				toast.error('An error occurred while editing the event')
				//return to the previous state if an error occurs
				dispatch(editEventAction(oldEvent))
			}
			return
		})
		dispatch(editEventAction(eventEdited))
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
