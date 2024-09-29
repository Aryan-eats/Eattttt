const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  restaurantName: {
    type: String,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  itemId: {
    type: String,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
  orderedTime: {
    type: Date,
    required: true,
    default: Date.now,
  },
  deliveryBoyId: {
    type: String,
    required: true,
  },
  deliveryBoyName: {
    type: String,
    required: true,
  },
  deliveryBoyMobile: {
    type: String,
    required: true,
  },
  deliveryBoyEnterTime: {
    type: Date,
  },
  deliveryBoyLeaveTime: {
    type: Date,
  },
  deliveredTime: {
    type: Date,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
