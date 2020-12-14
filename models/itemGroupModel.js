const mongoose = require("mongoose");

const itemGroupSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  group: {
    type: String,
    required: true
  },
  description: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = ItemGroup = mongoose.model("ItemGroup", itemGroupSchema);
