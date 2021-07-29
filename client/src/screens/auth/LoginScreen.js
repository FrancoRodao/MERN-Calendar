import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'

import { startLoginAction } from '../../redux/actions/authActions'
import { useForm } from '../../hooks/useForm'
import '../../styles/screens/auth/auth.css'

export default function LoginScreen() {
	const { state, msg } = useSelector(state => state.ui.error)
	const dispatch = useDispatch()

	const { formValues, handleInputChange } = useForm({
		email: '',
		password: ''
	})

	const handleSubmitForm = e => {
		e.preventDefault()
		const { email, password } = formValues
		dispatch(startLoginAction(email, password))
	}

	const [vissiblePassword, setVissiblePassword] = useState(false)

	const history = useHistory()
	const toRegister = () => history.push('/register')

	return (
		<div className="auth">
			<div className="auth__container">
				{/*error message*/ state && <div> {msg} </div>}

				<div className="auth__imgContainer">
					<img src="../../../public/img/candado.png"></img>
				</div>
				<form onSubmit={handleSubmitForm} className="auth__form">
					<div className="auth__form__container">
						<input
							className="auth__form__input"
							placeholder=" "
							type="email"
							id="email_input"
							name="email"
							required
							onChange={handleInputChange}
						/>
						<label htmlFor="email_input" className="auth__form__label">
							Email
						</label>
					</div>

					<div className="auth__form__container">
						<input
							className="auth__form__input"
							placeholder=" "
							type={vissiblePassword ? 'text' : 'password'}
							id="password_input"
							name="password"
							required
							onChange={handleInputChange}
						/>
						<label htmlFor="password_input" className="auth__form__label">
							Password
						</label>
						<span
							onClick={() => setVissiblePassword(!vissiblePassword)}
							className="auth__form__viewpassword"
						>
							{vissiblePassword ? (
								<i className="fas fa-eye-slash"></i>
							) : (
								<i className="fas fa-eye"></i>
							)}
						</span>
					</div>
					<button className="auth__form__button" type="submit">
						Login
					</button>
				</form>

				<button className="auth__forgot">Forgot password?</button>

				<div className="auth__newaccount">
					<p>Don´t have an account?</p>{' '}
					<button onClick={toRegister}>Register!</button>
				</div>
			</div>
		</div>
	)
}
