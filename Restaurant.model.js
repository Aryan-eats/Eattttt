const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({

  restaurantName: {
    type: String,
    required: true,
  },
  registeredTime: {
    type: Date,
    default: Date.now,
  },
  restaurantMobile: {
    type: String,
    required: true,
    unique: true,
  },
  restaurantEmail: {
    type: String,
    required: true,
    unique: true,
  },
  restaurantImage: {
    type: String,
    required: true,
  },
  restaurantLocation: {
    type: String,
    required: true,
  },
  restaurantRating: {
    type: Number,
    min: 0, 
    max: 5, 
  },
  restaurantCuisine: {
    type: String,
    required: true,
  },
  averageOrderValue: {
    type: Number,
    required: true,
  },
  peakHours: {
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
  },
  openDays: {
    type: [String],
    required: true,
  },
  openCloseTime: {
    open: {
      type: String,
      required: true,
    },
    close: {
      type: String,
      required: true,
    },
  },
  bankAccountNumber: {
    type: String,
    required: true,
  },
  documents: {
    FSSAI: {
      type: String,
      required: true,
    },
    GSTIN: {
      type: String,
      required: true,
    },
    bankAccount: {
      type: String,
      required: true,
    },
    panCard: {
      type: String,
      required: true,
    },
  },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
