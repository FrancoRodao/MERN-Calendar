const express = require('express')
const path = require('path')
const { dbConnection } = require('./database/config')

const cors = require('cors')
const cookieParser = require('cookie-parser')

const helmet = require('helmet')

const dotenv = require('dotenv')
dotenv.config()

const app = express()

if (process.env.NODE_ENV === 'development') {
	const morgan = require('morgan')
	app.use(morgan('dev'))
}

//database
dbConnection()

//config - middlewares
const origins = [
	'http://localhost:8080',
	'mern-calendar-production-9c8f.up.railway.app'
]
app.use(helmet())
app.use(
	cors({
		credentials: true,
		origin: origins
	})
)
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.json())
app.use(cookieParser())

//routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

app.listen(process.env.PORT || 5000, () => {
	console.log('Server on port', process.env.PORT || 5000)
})

if (process.env.NODE_ENV == 'production') {
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
	})
}
