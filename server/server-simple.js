const { v4: uuidv4 } = require('uuid');
const express = require('express');
const app = express();
const port = process.env.PORT || 3005;
//----------------------SOCKET.IO------------------------------
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const { logger } = require('./utils');

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/../client/src/graph.html')

});

const socketsMap = new Map();  // Map()  for create a object with key-value for each client(FrontEnd)

io.on('connection', (socket) => {   // is connected, create the socket

  const clientId = socket.handshake.query.clientId || uuidv4(); // is the clientPI or clientFrontEnd
  const isRaspi = clientId.startsWith('sensor');

  socket.on('disconnect', () => {
    if (isRaspi) {
      logger.log('Raspi disconnected');
    } else {
      logger.log('Client disconnected');

      socketsMap.delete(clientId);  // delete the clientFrontEnd from the list in the Map()
    }
  });

  if (isRaspi) {
    logger.log('Raspi connected');

    socket.on('sensorData', (sensorReading) => {    // event name, function listener
      logger.log(`Received sensor readings from raspi: ${clientId}`);
      logger.log(JSON.stringify(sensorReading));

      socketsMap.forEach((socket, clientId) => {   // conexion con socket FEnd 1, ID
        logger.log(`Sending data to client: ${clientId}`);
        socket.emit('sensorReading', sensorReading);
      });
    });
  } else {
    logger.log('Client connected');

    socketsMap.set(clientId, socket);  // adding to Map() the socket "clientFrontend who is coming"
  }
});

const gracefulShutdown = () => {
  process.exit(0);
};

// Graceful shutdown
process.once('SIGTERM', gracefulShutdown);  // interruptions 'SIGTERM' senales del sistema
process.once('SIGINT', gracefulShutdown);

server.listen(port, () => {
  logger.log(`Server is listening on port ${port}`);
});

