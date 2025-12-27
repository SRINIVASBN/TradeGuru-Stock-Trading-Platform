// HoldingsModel.js
const Mongo = require("mongoose"); // Import mongoose
const HoldingSchema = require("../schema/HoldingSchema"); // Import the schema

// Create a Mongoose model based on the schema
// "Holding" is the name of the model (also the collection will be 'holdings' in MongoDB)
const Holding = Mongo.model("Holding", HoldingSchema);

// Export the model so it can be used elsewhere (like in routes or controllers)
module.exports = Holding;
