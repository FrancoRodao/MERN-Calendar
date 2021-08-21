import { types } from '../types'

import { errorMessages } from '../../helpers/messages'
import { AuthService } from '../../api/auth'

import { setErrorAction } from './uiActions'

export const startLoginAction = (email, password) => {
	return dispatch => {
		AuthService.login(email, password)
			.then(res => {
				dispatch(loginAction(res.data.user._id, res.data.user.name))
				localStorage.setItem('accessToken', res.data.accessToken)
			})
			.catch(err => {
				if (err.response?.data) {
					dispatch(setErrorAction(err.response.data.msg))
				}
				return err
			})
	}
}

export const loginAction = (uid, name) => ({
	type: types.authLogin,
	payload: {
		uid,
		name
	}
})

export const startCheckingAction = () => {
	return async dispatch => {
		try {
			if (localStorage.getItem('accessToken')) {
				const { data } = await AuthService.renewToken()
				dispatch(loginAction(data._id, data.name))
				localStorage.setItem('accessToken', data.accessToken)
			} else {
				dispatch(startLogoutAction())
			}
		} catch (err) {
			dispatch(
				setErrorAction(
					err?.response?.data?.msg || errorMessages.UNEXPECTED_ERROR
				)
			)
		}

		dispatch(finishCheckingAction())
	}
}

export const finishCheckingAction = () => ({
	type: types.authCheckingFinish
})

export const startLogoutAction = () => {
	return dispatch => {
		if (localStorage.getItem('accessToken')) {
			localStorage.removeItem('accessToken')
		}

		AuthService.logout()
			.then(res => res.data.ok && dispatch(logoutAction()))
			.catch(e => e)
	}
}

export const logoutAction = () => ({
	type: types.authLogout
})

export const startRegisterUser = (name, email, password) => {
	return async dispatch => {
		try {
			await AuthService.register(name, email, password)
		} catch (err) {
			if (err.response?.data) {
				dispatch(setErrorAction(err.response.data.msg))
			}
			return err
		}
	}
}

export const registerAction = () => ({
	type: types.authRegister
})
