const Uom = require("../models/uomModel");
const factory = require("./handlerFactory");
// const APIFeatures = require("../utils/apiFeatures");

exports.getAllUoms = factory.getAll(Uom);
exports.getUom = factory.getOne(Uom);
exports.updateUom = factory.updateOne(Uom);
exports.deleteUom = factory.deleteOne(Uom);
