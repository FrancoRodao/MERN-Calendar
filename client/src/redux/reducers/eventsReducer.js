import { types } from '../types'

const initialState = {
	events: [],
	activeEvent: null,
	activeSlot: null
}

export const eventsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.loadEvents:
			return {
				...state,
				events: action.payload.events
			}

		case types.eventAddNew:
			return {
				...state,
				events: [...state.events, action.payload.event]
			}

		case types.eventSetActive:
			return {
				...state,
				activeEvent: action.payload.event
			}

		case types.setActiveSlot:
			return {
				...state,
				activeSlot: action.payload.slot
			}

		case types.eventEdit:
			return {
				...state,
				events: state.events.map(e => {
					return e.id === action.payload.event.id ? action.payload.event : e
				})
			}

		case types.eventDelete:
			return {
				...state,
				events: state.events.filter(e => e.id !== action.payload.eventId)
			}

		default:
			return state
	}
}
