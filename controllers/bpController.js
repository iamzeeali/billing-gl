const BusinessPartner = require("../models/businessPartnerModel");
const factory = require("./handlerFactory");
// const APIFeatures = require("../utils/apiFeatures");

exports.getAllBusinessPartners = factory.getAll(BusinessPartner);
exports.getBusinessPartner = factory.getOne(BusinessPartner);
exports.updateBusinessPartner = factory.updateOne(BusinessPartner);
exports.deleteBusinessPartner = factory.deleteOne(BusinessPartner);

