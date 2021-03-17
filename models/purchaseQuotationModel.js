const mongoose = require("mongoose");

const purchaseQuotationSchema = new mongoose.Schema({
  pqNo: {
    type: String,
    // required: [true, "Please enter BP Code!"],
  },
  status: {
    type: String,
    enum: ["open", "close"],
    default: "open",
  },
  supplier: { type: mongoose.Schema.ObjectId, ref: "Supplier" },
  pqItems: [
    {
      item: {
        type: mongoose.Schema.ObjectId,
        ref: "Item",
      },
      unitPrice: Number,
      quantity: Number,
      tax: String,
      total: Number,
    },
  ],
  total: { type: Number },
  discount: { type: String },
  dDate: { ype: Date },
  qDate: { ype: Date },
  date: {
    type: Date,
    default: Date.now,
  },
});

purchaseQuotationSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

purchaseQuotationSchema.pre(/^find/, function (next) {
  this.populate({
    path: "supplier",
    select: "name",
  }).populate({
    path: "pqItems.item",
    select: "name",
  });

  next();
});

module.exports = PurchaseQuotation = mongoose.model(
  "PurchaseQuotation",
  purchaseQuotationSchema
);
