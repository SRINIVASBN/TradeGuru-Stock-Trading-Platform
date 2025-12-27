const mongoose = require("mongoose");
const { OrdersSchema } = require("../schema/OrdersSchema");

const Order = mongoose.model("Order", OrdersSchema);

module.exports = Order ;
