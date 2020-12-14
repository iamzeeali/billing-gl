const BpGroup = require("../models/bpGroupModel");
const factory = require("./handlerFactory");
// const APIFeatures = require("../utils/apiFeatures");

exports.getAllBpGroups = factory.getAll(BpGroup);
exports.getBpGroup = factory.getOne(BpGroup);
exports.updateBpGroup = factory.updateOne(BpGroup);
exports.deleteBpGroup = factory.deleteOne(BpGroup);
