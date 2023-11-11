const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

// rotas
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.use(routes);
// end rotas

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log('Socket id :: %s ::', socket.id);
  socket.on('test-connection', (msg) => {
    io.emit('test-connection', msg);
  });
  socket.on('disconnect', async (reason) => {
    console.log(reason, `<::: ${socket.id} ::<`);
    socket.leave();
  });
});

module.exports = { io, server };
