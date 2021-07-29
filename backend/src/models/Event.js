const { Schema, model } = require('mongoose')
const User = require('./User')

const EventSchema = Schema({
	title: {
		type: String,
		required: true
	},
	notes: {
		type: String
	},
	startDate: {
		type: Date,
		required: true
	},
	endDate: {
		type: Date,
		required: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: User.modelName,
		required: true
	}
})

EventSchema.method('toJSON', function () {
	const { _id, ...object } = this.toObject()
	object.id = _id

	return object
})

const Event = model('Event', EventSchema)

module.exports = Event
