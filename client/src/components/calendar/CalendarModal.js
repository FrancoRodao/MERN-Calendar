import { useDispatch, useSelector } from 'react-redux'

import DateTimePicker from 'react-datetime-picker'
import React from 'react'

import Modal from '../Modal'
import {
	startAddNewEventAction,
	startEditEventAction
} from '../../redux/actions/eventsActions'

import '../../styles/components/calendar/CalendarModal.css'
import { useCalendarModal } from '../../hooks/useCalendarModal'

export default function CalendarModal() {
	const state = useSelector(state => state)
	const { activeEvent } = state.events
	const { isModalOpen } = state.ui.modal
	const dispatch = useDispatch()

	const {
		modalFormValues,
		closeCalendarModal,
		modalHandleInputChange,
		modalStartDateChangeHandler,
		modalEndDateChangeHandler
	} = useCalendarModal()

	const { title, notes } = modalFormValues

	const handleSubmitForm = e => {
		e.preventDefault()
		if (activeEvent) {
			dispatch(startEditEventAction(modalFormValues, activeEvent.id))
		} else {
			dispatch(startAddNewEventAction(modalFormValues))
		}

		closeCalendarModal()
	}

	return (
		<Modal isOpen={isModalOpen}>
			<div className="modal__header">
				<h1 className="modal__headTitle">
					{activeEvent ? 'Edit Event' : 'New Event'}{' '}
				</h1>
				<span onClick={closeCalendarModal} className="modal__close">
					<i className="fas fa-times-circle fa-2x"></i>
				</span>
			</div>
			<hr className="modal__hr--first" />
			<form className="modal__form" onSubmit={handleSubmitForm}>
				<div className="modal__container">
					<label className="modal__label">Start date and time</label>
					<DateTimePicker
						disableClock={true}
						clearIcon={null}
						onChange={modalStartDateChangeHandler}
						value={modalFormValues.startDate}
						className="modal__input"
					/>
				</div>

				<div className="modal__container">
					<label className="modal__label">End date and time</label>
					<DateTimePicker
						disableClock={true}
						clearIcon={null}
						onChange={modalEndDateChangeHandler}
						value={modalFormValues.endDate}
						minDate={modalFormValues.startDate}
						className="modal__input modal__input--endDate"
					/>
				</div>

				<hr className="modal__hr" />
				<div className="modal__container">
					<label className="modal__label">Title and Notes</label>
					<input
						type="text"
						className="modal__input"
						placeholder="Event title"
						name="title"
						autoComplete="off"
						value={title}
						onChange={modalHandleInputChange}
						required
					/>
					<small className="modal__small">A short description</small>
				</div>

				<div className="modal__container">
					<textarea
						type="text"
						className="modal__input"
						placeholder="Notes"
						rows="5"
						name="notes"
						value={notes}
						onChange={modalHandleInputChange}
					></textarea>
					<small className="modal__small">Additional Information</small>
				</div>

				<button type="submit" className="modal__button">
					<i className="far fa-save"></i>
					<span> Save</span>
				</button>
			</form>
		</Modal>
	)
}
