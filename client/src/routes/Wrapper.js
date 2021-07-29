import { Switch, Route, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import RegisterScreen from '../screens/auth/RegisterScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import CalendarScreen from '../screens/CalendarScreen'

import { clearErrorAction } from '../redux/actions/uiActions'

import PageNotFound from '../components/PageNotFound'

import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

export default function Wrapper() {
	const dispatch = useDispatch()
	const location = useLocation()

	//clear errors when changing pages
	useEffect(() => dispatch(clearErrorAction()), [location.pathname, dispatch])

	const { checking, uid } = useSelector(state => state.auth)
	const isAuthenticated = !checking && uid != null

	if (checking) {
		return <div>Wait please...</div>
	}

	return (
		<Switch>
			<PrivateRoute
				Component={CalendarScreen}
				path="/"
				isAuthenticated={isAuthenticated}
				exact={true}
			/>

			<PublicRoute
				Component={LoginScreen}
				path="/login"
				isAuthenticated={isAuthenticated}
			/>

			<PublicRoute
				Component={RegisterScreen}
				path="/register"
				isAuthenticated={isAuthenticated}
			/>

			<Route path="*">
				<PageNotFound />
			</Route>
		</Switch>
	)
}

Wrapper.propTypes = {
	location: PropTypes.object.isRequired
}
