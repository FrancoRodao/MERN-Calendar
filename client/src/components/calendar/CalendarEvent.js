import PropTypes from 'prop-types'

export default function CalendarEvent({ event }) {
	const { title, start } = event
	const { notes } = event.extendedProps

	const isPmOrAm = start.getHours() >= 12 ? 'pm' : 'am'

	return (
		<div>
			<span>
				<strong>
					{start.getHours()}:{String(start.getMinutes()).padStart(2, '0')}
					{isPmOrAm}
				</strong>{' '}
				{title}
			</span>
		</div>
	)
}

CalendarEvent.propTypes = {
	event: PropTypes.object
}
