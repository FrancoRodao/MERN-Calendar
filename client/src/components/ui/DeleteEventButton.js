import { useDispatch, useSelector } from 'react-redux'

import {
	setActiveEventAction,
	startDeleteEventAction
} from '../../redux/actions/eventsActions'

export default function DeleteEventButton() {
	const dispatch = useDispatch()
	const { activeEvent } = useSelector(state => state.events)

	const deleteEventHandler = e => {
		e.preventDefault()
		dispatch(startDeleteEventAction(activeEvent.id))
		dispatch(setActiveEventAction(null))
	}

	return (
		<button
			onClick={deleteEventHandler}
			className={`calendar__button deleteEventButton opacity-${
				activeEvent ? '1' : '0'
			}`}
		>
			<i className="fas fa-trash"></i>
		</button>
	)
}
