const express = require("express");
const router = express.Router();
const Holdings = require("../model/HoldingsModel");
const { holdings: HoldingsData } = require("../../dashboard/src/data/data");


// @route   GET /addHoldings
// @desc    Insert holdings into DB (only if not already inserted)
router.get("/addHoldings", async (req, res) => {
  try {
    const existing = await Holdings.find();
    if (existing.length > 0) {
      return res.status(200).json({ message: "Holdings already exist in DB" });
    }

    await Holdings.insertMany(HoldingsData);
    res.status(201).json({ message: "Holdings inserted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


 
//display the holding data from the collcetion   to dashboard
router.get("/DisplayHoldings", async (req, res) => {
    let DisplayHoldings = await Holdings.find();
    res.json(DisplayHoldings);
});



module.exports = router;
