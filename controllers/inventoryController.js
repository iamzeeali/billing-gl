const Inventory = require("../models/inventoryModel");
const factory = require("./handlerFactory");
// const APIFeatures = require("../utils/apiFeatures");

exports.getAllInventories = factory.getAll(Inventory);
exports.getInventory = factory.getOne(Inventory);
exports.updateInventory = factory.updateOne(Inventory);
exports.deleteInventory = factory.deleteOne(Inventory);
