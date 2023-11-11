const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const cors = require('cors');
const { join } = require('node:path');

const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

// rotas
app.get('/tester', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
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
const test = 'Test';
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

module.exports = { io, server, test };
