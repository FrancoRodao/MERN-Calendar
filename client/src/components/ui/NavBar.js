import { useDispatch, useSelector } from 'react-redux'
import React from 'react'

import { startLogoutAction } from '../../redux/actions/authActions'
import '../../styles/components/ui/NavBar.css'

export default function NavBar() {
	const dispatch = useDispatch()
	const { name } = useSelector(state => state.auth)

	const handleLogout = () => dispatch(startLogoutAction())

	return (
		<nav className="navbar__nav">
			<p>{name}</p>
			<div className="navbar__logout">
				<button onClick={handleLogout} className="navbar__button">
					<p className="navbar__logout__p">Logout</p>
					<i className="fas fa-sign-out-alt"></i>
				</button>
			</div>
		</nav>
	)
}
