const mongoose = require('./init');

const Record = mongoose.model('Record', {
  name: { type: String, required: [true, 'Please enter a city name.'] },
  rainFall: {type: Number, required: [true, 'Please enter a number']},
  date: {type: Date, required: [true, 'Please enter a date']}
})

// City.create({name: 'Melbourne', rainFall: 1.8, date: new Date().toISOString()})

module.exports = Record;