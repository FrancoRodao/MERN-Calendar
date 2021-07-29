import ReduxThunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'

import { uiReducer } from './reducers/uiReducer'
import { eventsReducer } from './reducers/eventsReducer'
import { authReducer } from './reducers/authReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = applyMiddleware(ReduxThunk)
const reducers = combineReducers({
	ui: uiReducer,
	events: eventsReducer,
	auth: authReducer
})
const store = createStore(reducers, composeEnhancers(middlewares))

export default store
