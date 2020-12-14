const Warehouse = require("../models/warehouseModel");
const factory = require("./handlerFactory");
// const APIFeatures = require("../utils/apiFeatures");

exports.getAllWarehouses = factory.getAll(Warehouse);
exports.getWarehouse = factory.getOne(Warehouse);
exports.updateWarehouse = factory.updateOne(Warehouse);
exports.deleteWarehouse = factory.deleteOne(Warehouse);
