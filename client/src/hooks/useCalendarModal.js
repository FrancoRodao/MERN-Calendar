import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { closeModalAction } from '../redux/actions/uiActions'

import { useForm } from './useForm'

export function useCalendarModal() {
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

	const { formValues, handleInputChange, setFormValues } =
		useForm(initFormValues)

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

	const closeCalendarModal = () => dispatch(closeModalAction())

	//change form values when the modal is opened
	useEffect(() => {
		if (isModalOpen) setFormValues(initFormValues())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isModalOpen])

	return {
		modalFormValues: formValues,
		closeCalendarModal,
		modalHandleInputChange: handleInputChange,
		modalStartDateChangeHandler: startDateChangeHandler,
		modalEndDateChangeHandler: endDateChangeHandler
	}
}
