import { types } from '../types'

export const setErrorAction = errorMsg => ({
	type: types.uiSetError,
	payload: {
		msg: errorMsg
	}
})

export const clearErrorAction = () => ({
	type: types.uiClearError
})

export const openModalAction = () => ({
	type: types.uiOpenModal
})

export const closeModalAction = () => ({
	type: types.uiCloseModal,
	payload: {}
})
