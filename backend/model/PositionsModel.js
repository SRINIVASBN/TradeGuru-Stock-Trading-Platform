// model/PositionsModel.js
const mongoose = require("mongoose");
const PositionSchema = require("../schema/PositionsSchema");

const Position = mongoose.model("Position", PositionSchema);

module.exports = Position;
