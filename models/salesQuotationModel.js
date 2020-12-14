const mongoose = require("mongoose");

const salesQuotationSchema = new mongoose.Schema({
  sqNo: {
    type: String,
    unique: true,
    required: [true, "Please enter BP Code!"]
  },
  status: {
    type: String,
    enum: ["open", "close"],
    default: "open"
  },
  customer: { type: mogngoose.Schema.ObjectId, ref: "BusinessPartner" },
  item: { type: mogngoose.Schema.ObjectId, ref: "Item" },
  quantity: { type: String },
  unitPrice: { type: String },
  total: { type: String },
  discount: { type: String },
  tax: { type: String },
  salesEmployee: { type: mongoose.Schema.ObjectId, ref: "Employee" },
  date: {
    type: Date,
    default: Date.now
  }
});

salesQuotationSchema.pre(/^find/, function(next) {
  this.find({ active: { $ne: false } });
  next();
});

activitySchema.pre(/^find/, function(next) {
  this.populate({
    path: "customer",
    select: "name"
  })
    .populate({
      path: "item",
      select: "itemCode serial name description"
    })
    .populate({
      path: "salesEmployee",
      select: "name"
    });

  next();
});

module.exports = SalesQuotation = mongoose.model(
  "SalesQuotation",
  salesQuotationSchema
);
