const mongoose = require('mongoose');

const deliveryBoySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
   
  },
  address: {
    type: String,
    required: true
  },
  loginTime: {
    type: Date,
    default: Date.now 
  },
  logoutTime: {
    type: Date
  },
  documents: {
    drivingLicense: {
      type: String,
      required: true
    },
    RC: {
      type: String,
      required: true
    }
  },
  bankAccountNumber: {
    type: String,
    required: true
  }
});

deliveryBoySchema.index({ mobile: 1 });

const DeliveryBoy = mongoose.model('DeliveryBoy', deliveryBoySchema);

module.exports = DeliveryBoy;
