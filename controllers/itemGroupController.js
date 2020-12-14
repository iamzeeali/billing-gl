const ItemGroup = require("../models/itemGroupModel");
const factory = require("./handlerFactory");
// const APIFeatures = require("../utils/apiFeatures");

exports.getAllItemGroups = factory.getAll(ItemGroup);
exports.getItemGroup = factory.getOne(ItemGroup);
exports.updateItemGroup = factory.updateOne(ItemGroup);
exports.deleteItemGroup = factory.deleteOne(ItemGroup);
