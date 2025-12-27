const express = require("express");
const router = express.Router();
const Positions = require("../model/PositionsModel");

const { positions: PositionsData } = require("../../dashboard/src/data/data");


// @route   GET /addPositions
// @desc    Insert positions into DB (only if not already inserted)
router.get("/addPositions", async (req, res) => {
  try {
    const existing = await Positions.find();
    if (existing.length > 0) {
      return res.status(200).json({ message: "Positions already exist in DB" });
    }

    await Positions.insertMany(PositionsData);
    res.status(201).json({ message: "Positions inserted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//display the Positions data from the collcetion to dashboard
router.get("/DisplayPositions", async (req, res) => {
    let DisplayPositions = await Positions.find();
    res.json(DisplayPositions);
});


module.exports = router;
