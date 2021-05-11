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

}

module.exports = {
    WaterFlowSensor,
};

