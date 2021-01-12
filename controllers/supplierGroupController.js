const SupplierGroup = require("../models/supplierGroupModel");
const factory = require("./handlerFactory");
// const APIFeatures = require("../utils/apiFeatures");

exports.getAllSupplierGroups = factory.getAll(SupplierGroup);
exports.getSupplierGroup = factory.getOne(SupplierGroup);
exports.updateSupplierGroup = factory.updateOne(SupplierGroup);
exports.deleteSupplierGroup = factory.deleteOne(SupplierGroup);
