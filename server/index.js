const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const port = 5000;

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, '../client', 'public')));

// endpoints

// listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})