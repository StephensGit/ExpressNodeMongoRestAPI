const mongoose = require('mongoose');

const coffeeshopSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Please add a name for your coffee shop'],
      maxlength: [50, 'Name can not be more than 50 characters'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('CoffeeShop', coffeeshopSchema);
