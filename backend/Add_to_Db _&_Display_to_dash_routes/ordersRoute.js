const express = require("express");
const router = express.Router();
const Orders = require("../model/OrdersModel");
const { orders: OrdersData } =require("../../dashboard/src/data/data");


// @route   GET /addOrders
// @desc    Insert orders into DB (only if not already inserted)
router.get("/addOrders", async (req, res) => {
  try {
    const existing = await Orders.find();
    if (existing.length > 0) {
      return res.status(200).json({ message: "Orders already exist in DB" });
    }

    await Orders.insertMany(OrdersData);
    res.status(201).json({ message: "Orders inserted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
