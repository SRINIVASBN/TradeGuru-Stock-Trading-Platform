const Mongo = require("mongoose");
const HoldingSchema = new Mongo.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String
});

module.exports = HoldingSchema;
