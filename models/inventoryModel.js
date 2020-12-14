const mongoose = require("mongoose");
const inventroySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  warehouse: {
    type: mongoose.Schema.ObjectId,
    ref: "Warehouse",
    required: true,
  },
  item: { type: mongoose.Schema.ObjectId, ref: "Item", required: true },
  quantity: { type: String },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

inventroySchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

inventroySchema.pre(/^find/, function (next) {
  this.populate({
    path: "item",
    select: "-__v",
  }).populate({
    path: "warehouse",
    select: "warehouse",
  });

  next();
});

module.exports = Inventory = mongoose.model("Inventory", inventroySchema);
