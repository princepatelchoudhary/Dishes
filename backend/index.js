const express = require('express');
const app = express();
const cors = require('cors')

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;
// it for featch api from forntend
app.use(
    cors({
      origin: "*",
    })
  );
//middleware to parse json request body
app.use(express.json());

//import routes for  API
const FoodRoutes = require("./routes/Food.js");

//mount the API routes
app.use("/api/v1", FoodRoutes);

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});


//default Route
app.get("/", (req, res) => {
    res.send(`<h1> This is HOMEPAGE baby</h1>`);
  });
