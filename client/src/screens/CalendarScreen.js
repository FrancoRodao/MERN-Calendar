import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'

import FullCalendar from '@fullcalendar/react' //must go before plugins
// eslint-disable-next-line import/order
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'

import { openModalAction } from '../redux/actions/uiActions'
import {
	setActiveEventAction,
	setActiveSlotAction,
	startEditEventAction,
	startLoadEvents
} from '../redux/actions/eventsActions'

import { stringDateToDate } from '../helpers/stringDateToDate'
import { isDoubleClick } from '../helpers/isDoubleClick'
import NewEventButton from '../components/ui/NewEventButton'
import NavBar from '../components/ui/NavBar'
import EditEventButton from '../components/ui/EditEventButton'
import DeleteEventButton from '../components/ui/DeleteEventButton'
import CalendarModal from '../components/calendar/CalendarModal'
import CalendarEvent from '../components/calendar/CalendarEvent'

import '../styles/screens/CalendarScreen.css'

export default function CalendarScreen() {
	const dispatch = useDispatch()
	const { events, activeEvent } = useSelector(state => state.events)

	useEffect(() => {
		dispatch(startLoadEvents())
	}, [dispatch])

	const [lastView, setLastView] = useState(
		localStorage.getItem('lastView') || 'dayGridMonth'
	)

	const eventClickHandler = e => {
		dispatch(setActiveEventAction(e.event))

		//remove styles to selected event
		if (activeEvent) {
			unSelectEvent()
		}

		//apply styles to selected event
		selectEvent(e)
	}

	const eventDropHandler = ({ event }) => {
		const eventEdited = {
			title: event.title,
			notes: event.extendedProps.notes,
			startDate: event.start,
			endDate: event.end
		}
		dispatch(startEditEventAction(eventEdited, event.id))
	}

	const dateClickHandler = e => {
		dispatch(setActiveEventAction(null))
		dispatch(setActiveSlotAction(e))
		if (activeEvent) {
			unSelectEvent()
		}

		if (isDoubleClick(e)) {
			dispatch(openModalAction())
		}
	}

	const onViewChangeHandler = event => {
		//remember the last visited view
		setLastView(event.view.type)
		localStorage.setItem('lastView', event.view.type)
	}

	const eventDataTransform = e => stringDateToDate(e)

	const eventDidMount = e => {
		e.el.dataset.eventId = e.event.id
		//when changing view keep the styles of the selected event
		if (activeEvent && e.event.id === activeEvent.id) {
			selectEvent(e)
		}
		e.el.addEventListener('dblclick', ev => {
			ev.stopPropagation()
			dispatch(setActiveEventAction(e.event))
			dispatch(openModalAction())
		})
	}

	const unSelectEvent = () => {
		const allEvents = document.querySelectorAll(
			`[data-event-id="${activeEvent.id}"]`
		)
		allEvents.forEach(event => {
			event.classList.remove('selectedEvent')
		})
	}

	const selectEvent = fullCalendarEvent => {
		const allEvents = document.querySelectorAll(
			`[data-event-id="${fullCalendarEvent.el.dataset.eventId}"]`
		)
		allEvents.forEach(event => {
			event.classList.add('selectedEvent')
		})
	}

	const isMobileDevice = screen.width < 768

	return (
		<div className="calendar__root">
			<div className="calendar__wrapper">
				<NavBar />
				<div style={{ padding: '10px' }}>
					<FullCalendar
						eventLongPressDelay={200}
						timeZone="local"
						plugins={[
							timeGridPlugin,
							dayGridPlugin,
							interactionPlugin,
							listPlugin
						]}
						initialView={lastView}
						eventDataTransform={eventDataTransform}
						events={events}
						eventDidMount={eventDidMount}
						eventClick={eventClickHandler}
						eventTextColor={'black'}
						eventContent={CalendarEvent}
						eventResizableFromStart={true}
						eventResize={eventDropHandler}
						eventDrop={eventDropHandler}
						eventTimeFormat={{
							hour: 'numeric',
							minute: '2-digit',
							meridiem: 'short'
						}}
						editable={true}
						selectable={!isMobileDevice}
						dateClick={dateClickHandler}
						allDaySlot={false}
						viewDidMount={onViewChangeHandler}
						headerToolbar={{
							start: 'prev,today,next',
							center: 'title',
							end: 'listYear dayGridMonth timeGridWeek dayGridDay'
						}}
						unselectAuto={false}
						//TODO: modal responsive
					/>
				</div>
			</div>

			<CalendarModal />

			<EditEventButton />
			<NewEventButton />
			<DeleteEventButton />
		</div>
	)
}
