/* 
fullcalendar has many conflicts with the double click 
and the selectable property, it is best to make 
a proper implementation to detect the double click
*/

/* 
oldEvent and fullCalendarEvent they are there to see if 
the double click is on the same cell
*/

let clickCount = 0
let oldEvent = null
let onClickTimer

export const isDoubleClick = fullCalendarEvent => {
	if (!fullCalendarEvent && process.env.MODE === 'DEVELOPMENT') {
		throw Error('parameters are required')
	}

	clickCount++

	if (clickCount === 1) {
		oldEvent = fullCalendarEvent
		onClickTimer = setTimeout(() => {
			clickCount = 0
		}, 500)
	}

	if (clickCount === 2) {
		clearTimeout(onClickTimer)
		clickCount = 0
		return fullCalendarEvent.dateStr === oldEvent.dateStr
	}

	return false
}
