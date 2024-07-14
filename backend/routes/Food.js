const express = require("express");
const router = express.Router();

//import controller
const { getFoods} = require("../controllers/getFoods.js");
const { update} = require("../controllers/update.js");

//define APi routes
router.get("/getFoods", getFoods);
router.put("/update/:id", update);  
module.exports = router;