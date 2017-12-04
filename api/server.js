const express = require('express');
const bodyParser = require('body-parser');

const server = express();

// Plugins
server.use(bodyParser.json())

// Routes


server.listen(7000, (error) => {
  console.log('server started at https://localhost:7000')
})