const mongoose = require("mongoose");
const bpGroupSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  group: {
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

bpGroupSchema.pre(/^find/, function(next) {
  this.find({ active: { $ne: false } });
  next();
});

module.exports = BpGroup = mongoose.model("BpGroup", bpGroupSchema);
