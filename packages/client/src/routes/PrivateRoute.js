import { Redirect, Route } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

export default function PrivateRoute({
	Component,
	isAuthenticated,
	path,
	...props
}) {
	return (
		<>
			{isAuthenticated ? (
				<Route path={path} component={Component} {...props} />
			) : (
				<Redirect to="/login" />
			)}
		</>
	)
}

PrivateRoute.propTypes = {
	Component: PropTypes.elementType,
	isAuthenticated: PropTypes.bool,
	path: PropTypes.string
}
