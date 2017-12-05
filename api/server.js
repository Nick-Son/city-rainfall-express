const express = require('express');
const bodyParser = require('body-parser');
// const Path = require('path');

const server = express();
const cors = require('cors');

// Plugins
server.use(bodyParser.json())
server.use(cors())

// Routes
server.use([
  require('./routes/records')
])

// server.get('/', function(req, res){
//   res.sendFile(Path.join(__dirname+'/index.html'));
// })

// Start the server
server.listen(7000, (error) => {
  console.log('server started at https://localhost:7000')
})