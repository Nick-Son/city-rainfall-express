const mongoose = require('mongoose');

mongoose.Promise = global.Promise
// Connect to local database
mongoose.connect(
  'mongodb://localhost/storms', 
  { useMongoClient: true }
)
.then(() => {
  console.log('Successfully connected to DB')
})
.catch((error) => {
  console.error('Error connecting to MongoDB database', error)
})
// Use the Promise functionality built into Node.js
mongoose.Promise = global.Promise;

module.exports = mongoose;