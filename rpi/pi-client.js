const io = require('socket.io-client');
const { v4: uuidv4 } = require('uuid');
const wfs     = require('water-flow-sensor')
// const { FakeSensor } = require('./FakeSensor');
const { getSensor } = require('./sensor-utils');
const { logger } = require('./utils');

const getSensors = (readingInterval) => Promise.resolve(getSensor());
// const getsensors = (readingInterval) => Promise.resolve(getSensor());
// getsensors(1000).then(data=>{
//   console.log(data)
// }).catch(error=>{
//   console.log(error)
// })


//  (EXAMPLE)   STOPING DATA FROM LEVEL SENSOR WHEN WATERfLOW SENSOR STARTS READING
// let run = true;



(async () => {
  try {
    const token = `sensor-${uuidv4()}`;
    const url = `http://localhost:3000/?token=${token}`
    const socket = io(url, {
      transports: ['websocket', 'polling']
    });
    const READING_INTERVAL = 1000;
    sensor = await getSensors(READING_INTERVAL);

    const gracefulShutdown = () => {
        sensor.stopReading();
        sensor.removeAllListeners();
        process.exit(0);
    };

    //  (EXAMPLE)   STOPING DATA FROM LEVEL SENSOR WHEN WATERfLOW SENSOR STARTS READING
    // if(!run){
    //   // clearInterval(getSensors)
    //   gracefulShutdown()
    // }else{
    //   sensor.startReading();
    // }
    // Graceful shutdown
    process.once('SIGTERM', gracefulShutdown);
    process.once('SIGINT', gracefulShutdown);

    sensor.on('error', (error) => {
      logger.error(error);
      process.exit(1);
    });

    sensor.on('data', (sensorReading) => {
      logger.log(JSON.stringify(sensorReading));
      socket.emit('sensorData', sensorReading);
    });

    //console.log(run)
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
})();


let waterFlowCounter = 0
let waterSensorData ;

const waterFlowSensor  = new wfs(17, 'YF-S201', wfsCb)
function wfsCb(res) {
    //console.log(res)
     //console.info(`${res.pin} | ${res.model} | ${res.flow} L/m | ${res.volume} L | ${res.pulses} `)
     if(!res.isRunning){
       flow = true
       waterFlowCounter += res.volume
     }
     //console.log(counter, 'This how many liters you have used in total')
     waterSensorData = {...res, waterFlowCounter: waterFlowCounter}
     console.log(waterSensorData)
    //  (EXAMPLE)   STOPING DATA FROM LEVEL SENSOR WHEN WATERfLOW SENSOR STARTS READING 
    //  sensor.stopReading();
    //  if(waterFlowCounter >5){
    //   sensor.startReading();
    //  }
}
