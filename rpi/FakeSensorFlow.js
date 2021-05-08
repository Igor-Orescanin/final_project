const EventEmitter = require('events');


class FakeSensorFlow extends EventEmitter {
    constructor(interval = 500) {
        super();
        this._interval = interval;
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
            const pin = 17;
            const model = "YF-S201";
            const volts = 1 + Math.random();

            const waterFlowReadings = {
                pin,
                model,
                volts: Number(volts.toFixed(2)),
                flow: Math.floor(Math.random() * 100),
                volume: Math.floor(Math.random() * 100),
                waterFlowCounter: Math.floor(Math.random() * 100),
                ts: new Date().toISOString(),   // fdecha en que ocurrio el evento de la medicion
            };

            this.emit('waterFlowDataSensor', waterFlowReadings);
        }, this._interval);
    }

    stopReading() {
        if (this.isRunning()) {
            clearInterval(this._timer);
            this._timer = undefined;
        }
    }
}

module.exports = {
    FakeSensorFlow,
};

