import { types } from '../types'

const initialState = {
	checking: true, // checking user data
	uid: null,
	name: null
}

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.authLogin:
			return {
				...state,
				uid: action.payload.uid,
				name: action.payload.name,
				checking: false
			}

		case types.authRegister:
			return {
				...state
			}

		case types.authLogout:
			return {
				...state,
				uid: null,
				name: null
			}

		case types.authCheckingFinish:
			return {
				...state,
				checking: false
			}

		default:
			return state
	}
}
