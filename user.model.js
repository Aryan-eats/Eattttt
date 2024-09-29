const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  name:{
    type : String,
    required : true,
  },
  address:{ 
  type :String,
  required : true,
  unique : true,
  },

  mobile: {
  type:String,
  required : true,
  unique : true,
  },
  email: {
    type:String,
    required: true,
    unique : true,
  },

  password : {
    type:String,
    required: true,
  },

    accountCreateTime: {
      type:Date,
      unique: true,
    },
      accountDeleteTime: {
        type:Date,
        unique: true,
      },
  ordersHistory: [{
    orderId: String,
    restaurantName: String,
    orderedTime: Date,
    items: [{
      itemId: String,
      itemName: String,
      quantity: Number,
      price: Number
    }]
  }]
});

userSchema.index({ name: 1, mobile: 1, address: 1, email: 1, items: 1, ordersHistory: 1 });
const User = mongoose.model('User', userSchema);

module.exports = User;
