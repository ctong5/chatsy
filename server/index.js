const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 5000;

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, '../client', 'public')));

// endpoints
app.get('/', (req, res) =>{
  res.status(200).send('Hello from GET 5000');
})

// socket connections
io.on('connection', socket => {
  console.log(`a user ${socket.id} connected`);

  socket.on('SEND_MESSAGE', data => {
    io.emit('RECEIVE_MESSAGE', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// listen
http.listen(port, () => {
  console.log(`Listening on port ${port}`);
})