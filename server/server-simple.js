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
const { daysWaterFlow } = require('./controllers/waterFlowController')
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
const User = require('./models/User');


app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/../client/src/graph.html')

});

io.on('connection', (socket) => {

  let serialNumber;

  socket.on('device_connected', async(deviceId) => {
    socket.join(deviceId)
    logger.log('Device connected')
    console.log(deviceId,'DeviceId is')

    let hasPreviousCleanWaterAlarm = false;
    let hasPreviousWasteWaterAlarm = false;

    const rpiConnected = await Device.findOneAndUpdate({ serialNumber: deviceId }, { isConnected: true }, { new: true });
    
        console.log(rpiConnected);
        socket.emit("registerd", rpiConnected)
        socket.emit("avalibleGPIO", "HAHA")
        socket.on('freeGPIOs', async(possibleGPIOs) => {
          console.log(possibleGPIOs)
          await Device.findOneAndUpdate({ serialNumber: deviceId }, { freeGPIOs: possibleGPIOs }, { new: true })
        })
        
    socket.on('sensorData', async (sensorReading) => {
      try {
        //logger.log(`Received sensor readings`);
         //logger.log(JSON.stringify(sensorReading));
        serialNumber = sensorReading.serialNumber

        //--------------------- EMAIL ALERT -----------------------------------------------
        const device = await Device.findOne({ serialNumber: sensorReading.serialNumber }).exec();
        const user = await User.findOne({ _id: device.userId }).exec();
        const email = user.email;


        if (sensorReading.label === "CLEAN") {
          const isInAlarmState = sensorReading.levelPercentage <= device.cleanAlertThreshold;
          const shouldSendAlarmEmail = isInAlarmState && !hasPreviousCleanWaterAlarm;
          const hasDeviceWantsEmails = device.cleanAlertThreshold !== 0;
          const shouldSendEmail = hasDeviceWantsEmails && isInAlarmState && shouldSendAlarmEmail;

          hasPreviousCleanWaterAlarm = isInAlarmState;

          if (shouldSendEmail) {

            let message = `ALERT Clean water level tank is lower than ${device.cleanAlertThreshold}% percentage ... Your tank has ${sensorReading.levelPercentage}%`;
            emailSender.sendEmail(email, message, (ok) => {
              if (ok) {
                // resolve();
              } else {
                // reject();
              }
            })
          }

        } else if (sensorReading.label === "WASTE") {

          const isInAlarmState = sensorReading.levelPercentage >= device.wasteAlertThreshold;
          const shouldSendAlarmEmail = isInAlarmState && !hasPreviousWasteWaterAlarm;
          const hasDeviceWantsEmails = device.wasteAlertThreshold !== 0;
          const shouldSendEmail = hasDeviceWantsEmails && isInAlarmState && shouldSendAlarmEmail;

          hasPreviousWasteWaterAlarm = isInAlarmState;

          if (shouldSendEmail) {

            let message = `ALERT Waste water level tank is higher than ${device.wasteAlertThreshold}% percentage ... Your tank has ${sensorReading.levelPercentage}%`;
            emailSender.sendEmail(email, message, (ok) => {
              if (ok) {
                // resolve();
              } else {
                // reject();
              }
            })
          }
        }

        socket.broadcast.emit('sensorReading', sensorReading);
      } catch (err) {
        //console.log(err);
      }
    })

    socket.on('waterFlowData', async (waterFlowReadings) => {
      const waterReading = new WaterFlow({
        waterFlowCounter: waterFlowReadings,
        ts: new Date().toISOString()
      })
      await waterReading.save()
      //logger.log(`Received water flow: ${clientId}`);
      //logger.log(JSON.stringify(waterFlowReadings));
    })
    //_____________________________________________________Buttons______________________
    
      //console.log(data);
    //FINDING THE DEVICE WITH SERIAL NUMBER
    const device = await Device.findOne({ serialNumber: deviceId }).exec();
    console.log(device)
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓IF USER HAVE ADDED BUTTONS TO DEVICE DATABASE THEN WE WILL SEND BUTTONS DATA TO RPI ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    if (device.hasLight) {
      const { lightsButton } = device;
      //    INITIAL STATUS FROM DATABASE
      socket.to(deviceId.toString()).emit('buttons', lightsButton);
    }
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑IF USER HAVE ADDED BUTTONS TO DEVICE DATABASE THEN WE WILL SEND BUTTONS DATA TO RPI  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    socket.on('rpiStatusLight', async(data) => {
      console.log("Incomming message from Device ", data)
      await Device.findOneAndUpdate({ serialNumber:device.serialNumber, "lightsButton.gpio": data.gpio }, { "lightsButton.$.status": data.status }, { new: true });
    })
    if (device.hasControl) {
      const { controlsButton } = device;
      //    INITIAL STATUS FROM DATABASE
      socket.to(deviceId.toString()).emit('buttons', controlsButton);
    }
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑IF USER HAVE ADDED BUTTONS TO DEVICE DATABASE THEN WE WILL SEND BUTTONS DATA TO RPI  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    socket.on('rpiStatusControl', async(data) => {
      console.log("Incomming message from Device ", data)
      await Device.findOneAndUpdate({ serialNumber:device.serialNumber, "controlsButton.gpio": data.gpio }, { "controlsButton.$.status": data.status }, { new: true });
    });
    

    socket.on("disconnect", async () => {
      try {
        const rpiDisconnected = await Device.findOneAndUpdate({ serialNumber }, { isConnected: false }, { new: true });
        console.log(rpiDisconnected.isConnected);
      } catch (err) {
        //console.log(err);
      }
    });

  });


  socket.on('user_connect', userId =>{
    socket.join(userId)
    console.log("=====>",userId)
  socket.on('switchStatusLight', (data)=>{
    console.log('incomming Order from User',data)
    let {gpio} = data;
    let {device_id} = data
    Device.findById(device_id).then(res => res.lightsButton.forEach(button => {
      console.log(button.gpio)
          if(button.gpio === parseInt(gpio)){
            socket.to(res.serialNumber).emit("switchStatus", {button: button, forButtons: data.forButtons})

          }
    }))
  })

  socket.on('switchStatusControl', (data)=>{
    console.log('incomming Order drom User',data)
    let {gpio} = data;
    let {device_id} = data;
    Device.findById(device_id).then(res => res.controlsButton.forEach(button => {
      //console.log(button.gpio)
          if(button.gpio === parseInt(gpio)){
            console.log('object')
            socket.to(res.serialNumber).emit("switchStatus", {button: button, forButtons: data.forButtons})
          }
    }))
  })



  socket.on('disconnect', ()=>{
    console.log(`User ${userId} disconnected now`)
  })

  })

})

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
  process.once('SIGTERM', gracefulShutdown);
  process.once('SIGINT', gracefulShutdown);

  server.listen(port, () => {
    logger.log(`Server is listening on port ${port}`);
  });
