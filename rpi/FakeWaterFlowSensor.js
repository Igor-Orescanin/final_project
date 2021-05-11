const EventEmitter = require('events');


class FakeWaterFlowSensor extends EventEmitter {
    constructor(interval = 500) {
        super();

        let waterFlowCounter = 0;

        const cb = () => {
            const isRunning = Math.round(Math.random()) === 1;
            const flow = Math.random();
            const volume = Math.random();
            const pulses = Math.floor(Math.random() * 10);

            if (!isRunning) {
                waterFlowCounter += volume
            }

            const waterFlowReadings = {
                ts: new Date().toISOString(),
                pin: 17,
                model: 'YF-S201',
                isRunning,
                flow,
                volume,
                pulses,
                waterFlowCounter,
            };

            this.emit('data', waterFlowReadings)
        };

        setInterval(cb, interval);
    }
}

module.exports = {
    FakeWaterFlowSensor,
};

