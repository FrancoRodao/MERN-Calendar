import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Provider } from 'react-redux'

import AppRouter from './routes/AppRouter'
import store from './redux/store'

import './styles/default.css'

export default function App() {
	return (
		<Provider store={store}>
			<ToastContainer />
			<AppRouter />
			<div id="modal-root"></div>
		</Provider>
	)
}
