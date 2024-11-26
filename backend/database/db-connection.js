const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// Connect to MongoDB
const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB", err));
};

module.exports = dbConnection;
