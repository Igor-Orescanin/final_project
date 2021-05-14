const EventEmitter = require('events');

const { WaterType } = require('./WaterType');

class FakeSensor extends EventEmitter {
    constructor(interval = 2000) {
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

        let label = WaterType.CLEAN;

        this._timer = setInterval(async () => {
            const volts = 1 + Math.random();
            const channel = Math.ceil(Math.random() * 100);

            label = label === WaterType.CLEAN ? WaterType.WASTE : WaterType.CLEAN;

            const sensorReading = {
                channel,
                label,
                ts: new Date().toISOString(),
                volts: Number(volts.toFixed(2)),
                levelPercentage: Math.floor(Math.random() * 100),
            };

            this.emit('data', sensorReading);
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
    FakeSensor,
};

