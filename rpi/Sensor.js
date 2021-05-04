const EventEmitter = require('events');   // modulo de node nativo

async function startSensorReadings(adcSensor, channel) {
    return new Promise((resolve, reject) => {
        adcSensor.startContinuousChannel(channel, (err, value, volts) => {
            if (err) {
                return reject(err);
            }

            return resolve({
                value,
                volts,
            });
        });
    });
}

async function stopSensorReadings(adcSensor) {
    return new Promise((resolve, reject) => {
        adcSensor.stopContinuousReadings((err) => {
            if (err) {
                return reject(err);
            }

            return resolve(undefined);
        });
    });
}

async function getSensorReading(adcSensor) {
    return new Promise((resolve, reject) => {
        adcSensor.getLastReading((err, value, voltsRaw) => {
            if (err) {
                return reject(err);
            }
            
            const levelPercentage = (value, minReading, maxReading) => {
                return ((maxReading - minReading) - (maxReading - value)) / ((maxReading - minReading) / 100)
            }


            let levelPercentage = 0;

            if (value < 800) {
                levelPercentage = 0;
            } else if (value < 960) {
                levelPercentage = 10;
            } else if (value < 990) {
                levelPercentage = 20;
            } else if (value < 1020) {
                levelPercentage = 30;
            } else if (value < 1060) {
                levelPercentage = 40;
            } else if (value < 1097) {
                levelPercentage = 60;
            } else if (value < 1135) {
                levelPercentage = 70;
            } else if (value < 1200) {
                levelPercentage = 80;
            } else if (value < 1280) {
                levelPercentage = 90;
            } else {
                levelPercentage = 100;
            }

            const sensorReading = {
                levelPercentage,
                ts: new Date().toISOString(),
                volts: Number(voltsRaw.toFixed(2)),
            };

            return resolve(sensorReading);
        });
    });
}

class Sensor extends EventEmitter {
    constructor(adcSensor, channelsMap = new Map(), waterFlow, readingInterval = 500) {
        super();
        this._adcSensor = adcSensor;
        this._channelsMap = channelsMap;
        this._readingInterval = readingInterval;
        this._timer = undefined;

    }

    isRunning() {
        return this._timer !== undefined;
    }

    startReading() {
        if (this.isRunning()) {
            return;
        }

        this._timer = setInterval(async () => {
            try {
                for (const channelName of this._channelsMap.keys()) {
                    const channel = this._channelsMap.get(channelName);

                    await startSensorReadings(this._adcSensor, channel);
                    const sensorReading = await getSensorReading(this._adcSensor);

                    await stopSensorReadings(this._adcSensor);

                    const enhancedSensorReading = {
                        channel,
                        label: channelName,
                        ...sensorReading,
                    };

                    this.emit('data', enhancedSensorReading);
                }
            } catch (error) {
                this.emit('error', error);
            }
        }, this._readingInterval);
    }

    stopReading() {
        if (this.isRunning()) {
            clearInterval(this._timer);
            this._timer = undefined;
        }
    }
}

module.exports = {
    Sensor,
};

