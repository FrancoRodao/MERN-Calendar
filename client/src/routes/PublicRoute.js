import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function PublicRoute({
	Component,
	isAuthenticated,
	path,
	...props
}) {
	return (
		<>
			{!isAuthenticated ? (
				<Route path={path} component={Component} {...props} />
			) : (
				<Redirect to="/" />
			)}
		</>
	)
}

PublicRoute.propTypes = {
	Component: PropTypes.elementType,
	isAuthenticated: PropTypes.bool,
	path: PropTypes.string
}
