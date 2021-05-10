const io = require('socket.io-client');
const { v4: uuidv4 } = require('uuid');

const { FakeSensor } = require('../rpi/FakeSensor');
const { FakeWaterFlowSensor } = require('./FakeWaterFlowSensor');
//const { getSensor, getWaterflowSensor } = require('./sensor-utils');
const { logger } = require('../server/utils');

const getSensor = (readingInterval) => Promise.resolve(new FakeSensor(readingInterval));
const getWaterflowSensor = () => Promise.resolve(new FakeWaterFlowSensor());

async function main() {
  try {
    const clientId = `sensor-${uuidv4()}`;
    const url = `http://localhost:3005/?clientId=${clientId}`
    const socket = io(url, {
      transports: ['websocket', 'polling']
    });
    const READING_INTERVAL = 500;  // half a second
    const sensor = await getSensor(READING_INTERVAL);
    const waterflowSensor = await getWaterflowSensor();

    socket.emit('device_connected');

    const gracefulShutdown = () => {
      sensor.stopReading();
      sensor.removeAllListeners();
      process.exit(0);
    };

    // Graceful shutdown
    process.once('SIGTERM', gracefulShutdown);
    process.once('SIGINT', gracefulShutdown);

    sensor.on('error', (error) => {
      logger.error(error);
      process.exit(1);
    });

    sensor.on('data', (sensorReading) => {
      // logger.log(JSON.stringify(sensorReading));
      // socket.emit('sensorData', sensorReading);
    });

    waterflowSensor.on('data', (waterFlowReadings) => {
      logger.log(JSON.stringify(waterFlowReadings));
      socket.emit('waterFlowData', waterFlowReadings);
    });

    // TODO get mac address
    // const serialNumber = os.getMacAddress()

    // sensorFlow.on('waterFlowDataSensor', (waterFlowReadings) => {
    //   logger.log(JSON.stringify(waterFlowReadings));
    //   socket.emit('waterFlowData', waterFlowReadings);
    //   // TODO send the serialNumber on each measurement
    //   //socket.emit('waterFlowData', { ...waterFlowReadings, serialNumber });
    // });

    sensor.startReading();
    // sensorFlow.startReading();

  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}

main();
