const express = require("express");
const userRouters = require("./routes/user");
const appointmentRoutes = require("./routes/appointment");
const errorHandler = require("./middlewares/errorHandler");
const dbConnection = require("./database/db-connection");
const cookieParser = require("cookie-parser");
const passport = require("./middlewares/auth");
var cors = require("cors");
const app = express();
// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
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
