const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRouters = require("./routes/user");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// Routes
app.use("/api/v1/user", userRouters);

// Error Handling middleware
app.use(errorHandler.errorHandler);

app.listen(process.env.PORT_NO, () => {
  console.log(`Server is running on port ${process.env.PORT_NO}`);
});
