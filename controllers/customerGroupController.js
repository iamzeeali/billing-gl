const CustomerGroup = require("../models/customerGroupModel");
const factory = require("./handlerFactory");
// const APIFeatures = require("../utils/apiFeatures");

exports.getAllCustomerGroups = factory.getAll(CustomerGroup);
exports.getCustomerGroup = factory.getOne(CustomerGroup);
exports.updateCustomerGroup = factory.updateOne(CustomerGroup);
exports.deleteCustomerGroup = factory.deleteOne(CustomerGroup);
