import { toast } from 'react-toastify'
import axios from 'axios'

import store from '../redux/store'
import { startLogoutAction } from '../redux/actions/authActions'

import { AuthService } from './auth'

const instance = axios.create({
	baseURL: process.env.API_URL,
	withCredentials: true
})

//add accesstoken on every request
instance.interceptors.request.use(config => {
	const token = localStorage.getItem('accessToken')
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

function createAxiosResponseInterceptor() {
	const interceptor = instance.interceptors.response.use(
		response => response,
		error => {
			//Failed to connect to the server
			if (error.message === 'Network Error') {
				toast.error('Failed to connect to the server')
				return
			}

			/*
			 * When response code is 401, try to refresh the token.
			 * Eject the interceptor so it doesn't loop in case
			 * token refresh causes the 401 response
			 */
			instance.interceptors.response.eject(interceptor)

			//HANDLE ERROR IN THUNK
			if (
				error.response.config.url === AuthService.authEndPoints.login ||
				error.response.config.url === AuthService.authEndPoints.register ||
				error.response.status !== 401
			) {
				return Promise.reject(error)
			}

			return AuthService.renewToken()
				.then(res => {
					const token = res.data.accessToken
					error.response.config.Authorization = `Bearer ${token}`
					localStorage.setItem('accessToken', token)
					return instance(error.response.config)
				})
				.catch(err => {
					//invalid refresh token
					toast.error('Try to re-authenticate')
					store.dispatch(startLogoutAction())

					return Promise.reject(err)
				})
				.finally(createAxiosResponseInterceptor)
		}
	)
}

createAxiosResponseInterceptor()

export default instance
