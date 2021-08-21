import { useDispatch, useSelector } from 'react-redux'

import { openModalAction } from '../../redux/actions/uiActions'

export default function EditEventButton() {
	const dispatch = useDispatch()
	const { activeEvent } = useSelector(state => state.events)

	const editEventHandler = e => {
		e.preventDefault()
		e.stopPropagation()
		dispatch(openModalAction())
	}

	return (
		<button
			onClick={editEventHandler}
			className={`calendar__button editEventButton opacity-${
				activeEvent ? '1' : '0'
			}`}
		>
			<i className="fas fa-edit"></i>
		</button>
	)
}
