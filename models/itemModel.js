const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  type: {
    type: String,
    enum: ["item", "service"],
    default: "item",
  },
  itemCode: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  serial: { type: String },
  group: { type: mongoose.Schema.ObjectId, ref: "ItemGroup" },
  description: { type: String },
  uom: { type: mongoose.Schema.ObjectId, ref: "Uom" },
  hsn: { type: String },
  unitPrice: { type: String },
  inventoryItem: { type: Boolean, default: false },
  salesItem: { type: Boolean, default: false },
  purchaseItem: { type: Boolean, default: false },
  inStock: { type: String },
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

itemSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

itemSchema.pre(/^find/, function (next) {
  this.populate({
    path: "group",
    select: "-user -__v",
  });

  next();
});

itemSchema.pre(/^find/, function (next) {
  this.populate({
    path: "uom",
    select: "uom",
  });

  next();
});

module.exports = Item = mongoose.model("Item", itemSchema);
