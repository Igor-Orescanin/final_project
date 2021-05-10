const Raspi = require('raspi');
const I2C = require('raspi-i2c').I2C;
const ADS1x15 = require('raspi-kit-ads1x15');
const wfs = require('water-flow-sensor');

const { Sensor } = require('./Sensor');
const { WaterFlowSensor } = require('./WaterFlowSensor');
const { WaterType } = require('./WaterType');

function initRaspberry() {
    return new Promise((resolve) => {
        Raspi.init(() => resolve(undefined));
    });
}

async function getSensor(readingInterval = 500) {
    await initRaspberry();

    // Init Raspi-I2c
    const i2c = new I2C();
    const adcSensor = new ADS1x15({
        i2c,                                    // i2c interface
        chip: ADS1x15.chips.IC_ADS1015,         // chip model
        address: ADS1x15.address.ADDRESS_0x48,  // i2c address on the bus

        // Defaults for future readings
        pga: ADS1x15.pga.PGA_4_096V,            // power-gain-amplifier range
        sps: ADS1x15.spsADS1015.SPS_250,        // data rate (samples per second),
        spsExtraDelay: 1,                       // Additional number of milliseconds to delay in addition to the reading time (based on sps)
    });
    const channelsMap = new Map();

    channelsMap.set(WaterType.CLEAN, ADS1x15.channel.CHANNEL_0);
    channelsMap.set(WaterType.WASTE, ADS1x15.channel.CHANNEL_1);

    return new Sensor(adcSensor, channelsMap, readingInterval);
}

async function getWaterflowSensor() {
    return new WaterFlowSensor(wfs);
}

module.exports = {
    getSensor,
    getWaterflowSensor,
};

