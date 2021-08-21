import { BrowserRouter, withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { startCheckingAction } from '../redux/actions/authActions'

import Wrapper from './Wrapper'

export default function AppRouter() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(startCheckingAction())
	}, [dispatch])

	/*
    the withrouter is to be able to detect when the page/path 
    changes and to be able to erase the errors from the state(redux)
  	*/
	const WithRouterApp = withRouter(Wrapper)

	return (
		<BrowserRouter>
			<WithRouterApp />
		</BrowserRouter>
	)
}
