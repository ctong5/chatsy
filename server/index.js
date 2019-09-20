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
app.get('/', (req, res) =>{
  res.status(200).send('Hello from GET 5000');
})

// listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})