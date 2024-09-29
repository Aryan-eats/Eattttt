const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  items: [
    {
      itemName: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String },
      available: { type: Boolean, default: true }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
