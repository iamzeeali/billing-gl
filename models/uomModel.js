const mongoose = require("mongoose");
const uomSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  uom: {
    type: String,
    required: true
  },
  description: String,
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

uomSchema.pre(/^find/, function(next) {
  this.find({ active: { $ne: false } });
  next();
});

module.exports = Uom = mongoose.model("Uom", uomSchema);
