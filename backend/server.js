const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRouters = require("./routes/user");
const appointmentRoutes = require("./routes/appointment");
const errorHandler = require("./middlewares/errorHandler");
const dbConnection = require("./database/db-connection");

const app = express();
app.use(express.json());

// Connect to MongoDB
dbConnection();

// Routes
app.use("/api/v1/user", userRouters);
app.use("/api/v1/appointment", appointmentRoutes);
// Error Handling middleware
app.use(errorHandler.errorHandler);

app.listen(process.env.PORT_NO, () => {
  console.log(`Server is running on port ${process.env.PORT_NO}`);
});

//admin = admin can edit any anointments
//doctor = doctor can edit only his/her appointments.   // all this is require we need to update the authorization middleware.
//patient = patient can edit his/her appointments  // we need to pass multiple arguments in authorization middleware using array.
