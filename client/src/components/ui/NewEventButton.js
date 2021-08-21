import { useDispatch, useSelector } from 'react-redux'

import { openModalAction } from '../../redux/actions/uiActions'
import { setActiveEventAction } from '../../redux/actions/eventsActions'
import '../../styles/components/ui/_calendarButtons.css'

export default function NewEventButton() {
	const dispatch = useDispatch()
	const { activeEvent } = useSelector(state => state.events)

	const addNewEventHandler = e => {
		e.preventDefault()
		dispatch(setActiveEventAction(null))
		dispatch(openModalAction())
	}

	return (
		<button
			onClick={addNewEventHandler}
			className={`calendar__button newEventButton opacity-${
				activeEvent ? '0' : '1'
			}`}
		>
			<i className="fas fa-plus"></i>
		</button>
	)
}
