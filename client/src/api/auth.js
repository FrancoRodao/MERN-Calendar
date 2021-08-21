import instance from './instance'

const authEndPoints = {
	login: '/auth/login',
	register: '/auth/register',
	logout: '/auth/logout',
	renewToken: '/auth/renewToken'
}

const login = (email, password) =>
	instance.post(authEndPoints.login, {
		email,
		password
	})

const register = (name, email, password) =>
	instance.post(authEndPoints.register, {
		name,
		email,
		password
	})

const logout = () => instance.delete(authEndPoints.logout)

const renewToken = () => instance.get(authEndPoints.renewToken)

export const AuthService = {
	login,
	register,
	logout,
	renewToken,
	authEndPoints
}
