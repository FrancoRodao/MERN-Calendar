export const stringDateToDate = event => {
	if (typeof event === 'object') {
		return {
			...event,
			start: new Date(event.startDate),
			end: new Date(event.endDate)
		}
	}
}
