const Food = require("../models/food.js");

exports.getFoods = async (req, res) => {
    try {
      // fetch all Food items from database
      const foods = await Food.find();
  
      // Response
      res.status(200).json({
        success: true,
        data: foods,
        message: "Entire Food Data is Fetched",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        error: err.message,
        message: "Server error",
      });
    }
  };