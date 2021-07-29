const mongoose = require('mongoose')

const dbConnection = async () => {
	try {
		await mongoose.connect(`${process.env.DB_CONNECTION}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		})

		console.log('Database on')
	} catch (error) {
		console.log('Unexpected error connecting to database')
	}
}

module.exports = {
	dbConnection
}
