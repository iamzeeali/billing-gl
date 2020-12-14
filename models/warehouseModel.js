const mongoose = require("mongoose");
const warehouseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  code: {
    type: String,
    unique: true,
    required: true
  },
  warehouse: {
    type: String,
    unique: true,
    required: true
  },
  country: String,
  state: String,
  city: String,
  address: String,
  pincode: String,
  active: {
    type: Boolean,
    default: true,
    select: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

warehouseSchema.pre(/^find/, function(next) {
  this.find({ active: { $ne: false } });
  next();
});

module.exports = Warehouse = mongoose.model("Warehouse", warehouseSchema);
