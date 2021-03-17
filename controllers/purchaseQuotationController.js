const PurcaseQuotation = require("../models/purchaseQuotationModel");
const factory = require("./handlerFactory");
// const APIFeatures = require("../utils/apiFeatures");

exports.getAllPurcaseQuotations = factory.getAll(PurcaseQuotation);
exports.getPurcaseQuotation = factory.getOne(PurcaseQuotation);
exports.updatePurcaseQuotation = factory.updateOne(PurcaseQuotation);
exports.deletePurcaseQuotation = factory.deleteOne(PurcaseQuotation);
