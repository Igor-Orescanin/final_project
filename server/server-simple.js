const { v4: uuidv4 } = require('uuid');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');
const session = require("express-session");

const port = process.env.PORT || 3005;
//----------------------SOCKET.IO------------------------------
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓


//---------------------MONGOOSE CONNECT ----------------------
dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

mongoose.connection.on("error", console.error);
mongoose.connection.on("open", function () {
  console.log("Database connection established...");
});


// middleware
app.use(express.json());
app.use(session({ secret: "secrets", saveUninitialized: false, resave: false }));
app.use(cors());

// Serve static resources
app.use("/public", express.static("public"));

//-------    ADD ROUTE--------------------
app.use('/', routesUrls);



//-----------RPI SERVER ------------------
const { logger } = require('./utils');

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/../client/src/graph.html')

});

io.on('connection', (socket) => {
  //   socket.join('sensor_measurements');
  socket.on('device_connected', () => {
    logger.log('Device connected');
    socket.on('sensorData', (sensorReading) => {
      logger.log(`Received sensor readings`);
        logger.log(JSON.stringify(sensorReading));

      // socket.broadcast.to('sensor_measurements').emit('sensorReading', sensorReading);
      //   socket.to('sensor_measurements').emit('sensorReading', sensorReading);
      socket.broadcast.emit('sensorReading', sensorReading);
      });
  });
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

