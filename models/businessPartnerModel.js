const mongoose = require("mongoose");

const businessPartnerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  bpCode: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["supplier", "customer"],
    required: true,
  },
  name: {
    type: String,
  },
  group: { type: String },
  accountBalance: { type: String },
  orders: { type: String },

  phone1: { type: String },
  phone2: { type: String },
  mobile: { type: String },
  email: {
    type: String,
    lowercase: true,
  },
  photo: { type: String },
  industry: { type: String },

  contactPerson: { type: String },
  contactPersonPhone: { type: String },
  contactPersonEmail: {
    type: String,
    lowercase: true,
  },

  shipToCountry: { type: String },
  shipToState: { type: String },
  shipToCity: { type: String },
  shipToAddress: { type: String },
  shipToPhone: { type: String },
  shipToEmail: { type: String },
  shipToPinCode: { type: String },

  billToCountry: { type: String },
  billToState: { type: String },
  billToCity: { type: String },
  billToAddress: { type: String },
  billToPhone: { type: String },
  billToEmail: { type: String },
  billToPinCode: { type: String },

  gstin: { type: String },
  creditLimit: { type: String },
  pan: { type: String },
  paymentTerms: { type: String },
  bank: { type: String },
  accountNo: { type: Number },
  active: {
    type: Boolean,
    default: true,
  },
});

// businessPartnerSchema.pre(/^find/, function(next) {
//   this.find({ active: { $ne: false } });
//   next();
// });

module.exports = BusinessPartner = mongoose.model(
  "BusinessPartner",
  businessPartnerSchema
);
