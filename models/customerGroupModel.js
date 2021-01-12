const mongoose = require("mongoose");

const customerGroupSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  group: {
    type: String,
    required: true,
  },
  description: String,
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

customerGroupSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

module.exports = CustomerGroup = mongoose.model(
  "CustomerGroup",
  customerGroupSchema
);
