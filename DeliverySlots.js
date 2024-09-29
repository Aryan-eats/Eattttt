const mongoose = require('mongoose');

const deliverySlotSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  slotTime: { type: String, required: true }, // Example: "12:00 PM - 1:00 PM"
  maxOrders: { type: Number, required: true }, // Maximum number of orders for this slot
  createdAt: { type: Date, default: Date.now }
});

const DeliverySlot = mongoose.model('DeliverySlot', deliverySlotSchema);

module.exports = DeliverySlot;
