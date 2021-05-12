const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routeUsers = require('./routes/users');
const routeAuth = require('./routes/auth');
const routeDevices = require('./routes/devices');
const routeWFSensor = require('./routes/waterFlow');
const cors = require('cors');
const session = require("express-session");
const emailSender = require('./emailSender');


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
  useUnifiedTopology: true,
  useFindAndModify: false
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
app.use('/users', routeUsers);
app.use('/auth', routeAuth);
app.use('/devices', routeDevices);
app.use('/waterFlow', routeWFSensor);



//-----------RPI SERVER ------------------
const { logger } = require('./utils');
const WaterFlow = require('./models/WaterFlow');
const Device = require('./models/Device');


app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/../client/src/graph.html')

});

io.on('connection', (socket) => {
  //   socket.join('sensor_measurements');
  socket.on('device_connected', () => {
    logger.log('Device connected');
    socket.on('sensorData', (sensorReading) => {
      // logger.log(`Received sensor readings`);
      // logger.log(JSON.stringify(sensorReading));

      //TODO COMO ME TRAIGO EL EMAIL DEL USER Y EL CLEANTHRESOLD
      const device = Device.findOne({ serialNumber: sensorReading.serialNumber }).exec();
      console.log(device.cleanWaterLevelAlertThreshold);


      if (sensorReading.label === "CLEAN") {
        if (sensorReading.levelPercentage >= 50) {
          console.log("Email alert");


        }

      }

      // socket.broadcast.to('sensor_measurements').emit('sensorReading', sensorReading);
      // socket.to('sensor_measurements').emit('sensorReading', sensorReading);
      socket.broadcast.emit('sensorReading', sensorReading);
    });


    socket.on('waterFlowData', async (waterFlowReadings) => {
      // TODO FIND DEVICE WITH SERIAL NUMBER RECEIVED
      // TODO TRAETE EL _ID Y LOS USAS PARA INSETARLO EN new waterFlow creado de mongoose
      const waterReading = new WaterFlow({
        pin: waterFlowReadings.pin,
        model: waterFlowReadings.model,
        isRunning: waterFlowReadings.isRunning,
        flow: waterFlowReadings.flow,
        volume: waterFlowReadings.volume,
        waterFlowCounter: waterFlowReadings.waterFlowCounter,
        ts: waterFlowReadings.ts,
        // TODO deviceId: device._id
      })

      await waterReading.save()
      logger.log(JSON.stringify(waterFlowReadings));
    })

  });
});

const gracefulShutdown = () => {
  process.exit(0);
};


/** ERROR HANDLING */
app.use(function (req, res, next) {
  const error = new Error("Looks like something broke...");
  error.status = 400;
  next(error);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500).send({
    error: {
      message: err.message
    }
  });
});


// Graceful shutdown
process.once('SIGTERM', gracefulShutdown);  // interruptions 'SIGTERM' senales del sistema
process.once('SIGINT', gracefulShutdown);

server.listen(port, () => {
  logger.log(`Server is listening on port ${port}`);
});
