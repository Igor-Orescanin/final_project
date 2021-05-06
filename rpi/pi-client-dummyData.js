const io = require('socket.io-client');
const { v4: uuidv4 } = require('uuid');

const { FakeSensor } = require('./FakeSensor');
//const { getSensor } = require('./sensor-utils');
const { logger } = require('../server/utils');

const getSensor = (readingInterval) => Promise.resolve(new FakeSensor(readingInterval));

async function main() {
  try {
    const clientId = `sensor-${uuidv4()}`;
    const url = `http://localhost:3005/?clientId=${clientId}`
    const socket = io(url, {
      transports: ['websocket', 'polling']
    });
    const READING_INTERVAL = 500;  // half a second
    const sensor = await getSensor(READING_INTERVAL);

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
      logger.log(JSON.stringify(sensorReading));
      socket.emit('sensorData', sensorReading); /// emitir al servidor
    });

    sensor.startReading();
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}

main();
