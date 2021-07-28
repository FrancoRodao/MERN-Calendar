import instance from './instance'

const login = (email, password) =>
	instance.post('/auth/login', {
		email,
		password
	})

const register = (name, email, password) =>
	instance.post('/auth/register', {
		name,
		email,
		password
	})

const logout = () => instance.delete('/auth/logout')

const renewToken = () => instance.get('/auth/renewToken')

export default {
	login,
	register,
	logout,
	renewToken
}
