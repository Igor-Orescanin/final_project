const EventEmitter = require('events');   // modulo de node nativo

class WaterFlowSensor extends EventEmitter {
    constructor(WaterFlow, pin = 17, model = 'YF-S201') {
        super();
        this._WaterFlow = WaterFlow;
        // this._readingInterval = readingInterval;
        // this._timer = undefined;

        const createCallback = () => {
            let waterFlowCounter = 0;

            return ({ pin, model, isRunning, flow, volume, pulses }) => {
                if (!isRunning) {
                    waterFlowCounter += volume
                }

                const measurement = {
                    ts: new Date().toISOString(),
                    pin,
                    model,
                    isRunning,
                    flow,
                    volume,
                    pulses,
                    waterFlowCounter,
                };

                this.emit('data', measurement);
            };
        };

        new WaterFlow(
            pin,
            model,
            createCallback(),
        )

        // setInterval(() => socket.emit('waterFlowData', waterFlowReadings), 5000)
    }

    // isRunning() {
    //     return this._timer !== undefined;
    // }

    // startReading() {
    //     if (this.isRunning()) {
    //         return;
    //     }

    //     this._timer = setInterval(async () => {
    //         try {
    //             for (const channelName of this._channelsMap.keys()) {
    //                 const channel = this._channelsMap.get(channelName);

    //                 await startSensorReadings(this._adcSensor, channel);
    //                 const sensorReading = await getSensorReading(this._adcSensor);

    //                 await stopSensorReadings(this._adcSensor);

    //                 const enhancedSensorReading = {
    //                     channel,
    //                     label: channelName,
    //                     ...sensorReading,
    //                 };

    //                 this.emit('data', enhancedSensorReading);
    //             }
    //         } catch (error) {
    //             this.emit('error', error);
    //         }
    //     }, this._readingInterval);
    // }

    // stopReading() {
    //     if (this.isRunning()) {
    //         clearInterval(this._timer);
    //         this._timer = undefined;
    //     }
    // }
}

module.exports = {
    WaterFlowSensor,
};

