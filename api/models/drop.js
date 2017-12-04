const Record = require('./record');

Record.deleteMany()
  .then(() => {
    console.log('Deleted day records')
  })