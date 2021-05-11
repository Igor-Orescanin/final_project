const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
<<<<<<< HEAD:server/models/Device.js
  deviceName: {
    type: String,
    require: true
  },
  serialNumber: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: mongoose.ObjectId
  }

})

module.exports = mongoose.model('Device', DeviceSchema)




=======
deviceName: {
type: String,
require: true
},
deviceId: {
type: String,
required: true,
unique: true
}
})

module.exports = mongoose.model('Device', DeviceSchema) 
>>>>>>> main:server/models/Devices.js
