const express = require('express')
const { dbConnection } = require('./database/config')

const cors = require('cors')
const cookieParser = require('cookie-parser')

const morgan = require('morgan')
const helmet = require('helmet')

const dotenv = require('dotenv')
dotenv.config()

const app = express()

//database
dbConnection()

//config - middlewares
const origins = [
	'http://localhost:8080',
	'https://mern-calendar-backend-prod.herokuapp.com/'
]
app.use(helmet())
app.use(
	cors({
		credentials: true,
		origin: origins
	})
)
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())

//routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

app.listen(process.env.PORT || 5000, () => {
	console.log('Server on port', process.env.PORT || 5000)
})
