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

io.on('connect', (socket) => {

  

  socket.on('device_connected', async(deviceId) => {
    socket.join(deviceId)     //?????????????????????????????????
    console.log(socket.rooms)
    logger.log('Device connected');
    console.log(deviceId,'deviceId')

    // socket.on('sensorData', async (sensorReading) => {
    //   try {
    //     // logger.log(`Received sensor readings`);
    //     // logger.log(JSON.stringify(sensorReading));
    //     serialNumber = sensorReading.serialNumber

    //     //--------------------- EMAIL ALERT -----------------------------------------------
    //     const device = await Device.findOne({ serialNumber: sensorReading.serialNumber }).exec();
    //     const user = await User.findOne({ _id: device.userId }).exec();
    //     const email = user.email;

    //     const rpiConnected = await Device.findOneAndUpdate({ serialNumber: sensorReading.serialNumber }, { isConnected: true }, { new: true });
    //     console.log(rpiConnected.isConnected);

    //     if (sensorReading.label === "CLEAN") {
    //       if (sensorReading.levelPercentage <= device.cleanAlertThreshold) {
    //         let message = `ALERT Clean water level tank is lower than ${device.cleanAlertThreshold}% percentage ... Your tank has ${sensorReading.levelPercentage}%`;
    //         emailSender.sendEmail(email, message, (ok) => {
    //           if (ok) {
    //             // resolve();
    //           } else {
    //             // reject();
    //           }
    //         })
    //       }

    //     } else if (sensorReading.label === "WASTE") {
    //       if (sensorReading.levelPercentage >= device.wasteAlertThreshold) {
    //         let message = `ALERT Grey water level tank is higher than ${device.wasteAlertThreshold}% percentage ... Your tank has ${sensorReading.levelPercentage}%`;
    //         emailSender.sendEmail(email, message, (ok) => {
    //           if (ok) {
    //             // resolve();
    //           } else {
    //             // reject();
    //           }
    //         })
    //       }
    //     }

    //     socket.broadcast.emit('sensorReading', sensorReading);
    //   } catch (err) {
    //     //console.log(err);
    //   }
    // })
    //_____________________________________________________Buttons______________________
   
    //console.log(data);
    //FINDING THE DEVICE WITH SERIAL NUMBER
    
        const device = await Device.findOne({ serialNumber: deviceId }).exec();
    console.log(device)
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓IF USER HAVE ADDED BUTTONS TO DEVICE DATABASE THEN WE WILL SEND BUTTONS DATA TO RPI ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    if (device.hasLight) {

      const { lightsButton } = device;
      // WILL ONLY THIS DEVICE RECIEVE OR OTHERS TO? ←←←←←←←←←←←
      //    INITIAL STATUS FROM DATABASE

      //socket.to(deviceId).emit('buttons', lightsButton);  ?????????????????????????
      socket.emit('buttons', lightsButton);

      // THIS MIGHT NOT BE NECESSARY BECAUSE I CAN NOT SAVE GPIO OBJECT PROPERLY IN DATABASE
      // socket.on('buttonInitilization', async (buttonInitilization) => {
      //   //console.log(buttonInitilization)
      //   await Device.findOneAndUpdate({ serialNumber: deviceId }, { "lightsButton": buttonInitilization }, { new: true }).then(res => socket.emit('check', res)).catch(err => console.log(err))
      // })
    }
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑IF USER HAVE ADDED BUTTONS TO DEVICE DATABASE THEN WE WILL SEND BUTTONS DATA TO RPI  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    
    socket.on('rpiStatusLight', (data) => {
      console.log("Incomming message from Device ", data)
      Device.findOneAndUpdate({ serialNumber:device.serialNumber, "lightsButton.gpio": data.gpio }, { "lightsButton.$.status": data.status }, { new: true }).then(res => {
        socket.to(device.userId).emit('gpioStatus', data)     // ???????????????????
        socket.emit('gpioStatus', data)   // ???????????????????
        console.log(device.userId,'userid')

      }).catch(err => {
        console.log(err)
        socket.to(device.userId).emit("error", error)
      })
    });


    // if (device.hasControl) {
    //   const { controlsButton } = device;
    //   // WILL ONLY THIS DEVICE RECIEVE OR OTHERS TO? ←←←←←←←←←←←
    //   //    INITIAL STATUS FROM DATABASE
    //   socket.to(deviceId).emit('buttons', controlsButton);
    //   // THIS MIGHT NOT BE NECESSARY BECAUSE I CAN NOT SAVE GPIO OBJECT PROPERLY IN DATABASE
    //   socket.on('buttonInitilization', async (buttonInitilization) => {
    //     //console.log(buttonInitilization)
    //     await Device.findOneAndUpdate({ serialNumber: deviceId }, { "controlsButton": buttonInitilization }, { new: true }).then(res => socket.emit('check', res)).catch(err => console.log(err))
    //   })
    // }
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑IF USER HAVE ADDED BUTTONS TO DEVICE DATABASE THEN WE WILL SEND BUTTONS DATA TO RPI  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    // socket.on('rpiStatusControl', (data) => {
    //   console.log("Incomming message from Device ", data)
    //   Device.findOneAndUpdate({ serialNumber:device.serialNumber, "controlsButton.gpio": data.gpio }, { "controlsButton.$.status": data.status }, { new: true }).then(res => {
    //     socket.to('60a516936f83e7889860f626').emit('gpioStatus', data)
    //   }).catch(err => {
    //     console.log(err)
    //     socket.to(device.userId).emit("error", error)
    //   })
    // });














    socket.on("disconnect",  () => {
      console.log('Device disconected',deviceId)
      // try {
      //   const rpiDisconnected = await Device.findOneAndUpdate({ serialNumber }, { isConnected: false }, { new: true });
      //   console.log(rpiDisconnected.isConnected);
      // } catch (err) {
      //   //console.log(err);
      // }
    });

  });
//__________________________________________USER CONNECTION__________________________________________________________________-



socket.on('user_connect', userId =>{
  socket.join(userId)
  console.log(socket.rooms)
  console.log(`user ${userId} is connected`)
//     socket.on('gpioStatus', data=>{
//   console.log(data)
//   socket.to("ID5000").emit('gpioStatus', data)
// })
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
  //Device.findById("60b0d290f7a1006dde1b2ea1").then(res =>console.log(res,'sfd'))
  //Device.find({serialNumber: deviceSerialNumber}).then(res =>console.log(res,'fghfthfh'))
})

// socket.on('switchStatusControl', (data)=>{
//   console.log('incomming Order drom User',data)
//   let {gpio} = data;
//   let {deviceSerialNumber} = data
//   //console.log(gpio,'f') Device ID
//   Device.find({serialNumber: deviceSerialNumber}).then(res => res.controlsButton.forEach(button => {
//     //console.log(button.gpio)
//         if(button.gpio === parseInt(gpio)){
//           console.log('object')
//           socket.emit("switchStatus", {button: button, forButtons: data.forButtons})
          
//         }
//   }))
// })



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

