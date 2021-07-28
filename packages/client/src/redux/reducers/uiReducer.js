import { types } from '../types'

const initialState = {
	error: {
		state: false,
		msg: ''
	},
	modal: {
		isModalOpen: false
	}
}

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.uiSetError:
			return {
				...state,
				error: {
					state: true,
					msg: action.payload.msg
				}
			}

		case types.uiClearError:
			return {
				...state,
				error: {
					state: false,
					msg: ''
				}
			}

		case types.uiOpenModal:
			return {
				...state,
				modal: {
					isModalOpen: true
				}
			}

		case types.uiCloseModal:
			return {
				...state,
				modal: {
					isModalOpen: false
				}
			}

		default:
			return state
	}
}
