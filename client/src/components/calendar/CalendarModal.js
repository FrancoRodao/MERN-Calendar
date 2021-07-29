import { useDispatch, useSelector } from 'react-redux'

import DateTimePicker from 'react-datetime-picker'
import React, { useEffect } from 'react'

import Modal from '../Modal'
import { closeModalAction } from '../../redux/actions/uiActions'
import {
	startAddNewEventAction,
	startEditEventAction
} from '../../redux/actions/eventsActions'

import { useForm } from '../../hooks/useForm'

import '../../styles/components/calendar/CalendarModal.css'

export default function CalendarModal() {
	const state = useSelector(state => state)
	const { activeEvent, activeSlot } = state.events
	const { isModalOpen } = state.ui.modal
	const dispatch = useDispatch()

	const initFormValues = () => {
		if (activeEvent) {
			const { title, start, end, extendedProps } = activeEvent
			return {
				title,
				notes: extendedProps.notes,
				startDate: start,
				endDate: end
			}
		}

		/*
			if there is any cell / slot selected when opening the modal 
			you must use the date of the selected slot
		*/
		const now = activeSlot ? new Date(activeSlot.date) : new Date()
		const nowPlus1 = activeSlot ? new Date(activeSlot.date) : new Date()
		nowPlus1.setHours(now.getHours() + 1)

		return {
			title: '',
			notes: '',
			startDate: now,
			endDate: nowPlus1
		}
	}

	//change form values when the modal is opened
	useEffect(() => {
		setFormValues(initFormValues())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isModalOpen])

	const { formValues, handleInputChange, setFormValues } =
		useForm(initFormValues)
	const { title, notes } = formValues

	const handleSubmitForm = e => {
		e.preventDefault()
		if (activeEvent) {
			dispatch(startEditEventAction(formValues, activeEvent.id))
		} else {
			dispatch(startAddNewEventAction(formValues))
		}

		dispatch(closeModalAction())
	}

	const startDateChangeHandler = startDate =>
		setFormValues({
			...formValues,
			startDate
		})
	const endDateChangeHandler = endDate =>
		setFormValues({
			...formValues,
			endDate
		})

	return (
		<Modal isOpen={isModalOpen}>
			<div className="modal__header">
				<h1 className="modal__headTitle">
					{activeEvent ? 'Edit Event' : 'New Event'}{' '}
				</h1>
				<span
					onClick={() => {
						dispatch(closeModalAction())
					}}
					className="modal__close"
				>
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
						onChange={startDateChangeHandler}
						value={formValues.startDate}
						className="modal__input"
					/>
				</div>

				<div className="modal__container">
					<label className="modal__label">End date and time</label>
					<DateTimePicker
						disableClock={true}
						clearIcon={null}
						onChange={endDateChangeHandler}
						value={formValues.endDate}
						minDate={formValues.startDate}
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
						onChange={handleInputChange}
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
						onChange={handleInputChange}
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
