import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { setErrorAction } from '../../redux/actions/uiActions'
import { startRegisterUser } from '../../redux/actions/authActions'
import { useForm } from '../../hooks/useForm'

import '../../styles/screens/auth/auth.css'
import '../../styles/screens/auth/RegisterScreen.css'
import { errorMessages } from '../../helpers/messages'

import candadoImg from '../../../public/img/candado.png'

export default function RegisterScreen() {
	const { state, msg } = useSelector(state => state.ui.error)
	const dispatch = useDispatch()
	const history = useHistory()

	const { formValues, handleInputChange } = useForm({
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	})
	const [vissiblePassword, setVissiblePassword] = useState(false)

	const handleSubmitForm = e => {
		e.preventDefault()
		const { name, email, password, confirmPassword } = formValues
		if (password === confirmPassword) {
			dispatch(startRegisterUser(name, email, password)).then(
				error => !error && toLogin()
			)
		} else {
			dispatch(setErrorAction(errorMessages.SAME_PASSWORDS))
		}
	}

	const toLogin = () => history.push('/login')

	return (
		<div className="auth">
			<div className="auth__container">
				{/*error messages*/ state && <div className="auth__error"> {msg} </div>}

				<div className="auth__imgContainer">
					<img src={candadoImg}></img>
				</div>

				<form
					onSubmit={handleSubmitForm}
					className="auth__form auth__register__form"
				>
					<div className="auth__form__container">
						<input
							className="auth__form__input"
							placeholder=" "
							type="text"
							id="name_input"
							name="name"
							onChange={handleInputChange}
						/>
						<label htmlFor="name_input" className="auth__form__label">
							Name
						</label>
					</div>

					<div className="auth__form__container">
						<input
							className="auth__form__input"
							placeholder=" "
							type="email"
							id="email_input"
							name="email"
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

					<div className="auth__form__container">
						<input
							className="auth__form__input"
							placeholder=" "
							type={vissiblePassword ? 'text' : 'password'}
							id="confirmpassword_input"
							name="confirmPassword"
							onChange={handleInputChange}
						/>
						<label
							htmlFor="confirmpassword_input"
							className="auth__form__label"
						>
							Confirm Password
						</label>
					</div>

					<button className="auth__form__button" type="submit">
						Register
					</button>
				</form>

				<div className="auth__newaccount">
					<p>you have an account?</p> <button onClick={toLogin}>Login!</button>
				</div>
			</div>
		</div>
	)
}
