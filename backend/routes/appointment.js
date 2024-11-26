const express = require("express");
const router = express.Router();
// const jwt = require("jwt");
const passport = require("../middlewares/auth");
const authorizer = require("../middlewares/authorization");

const appointmentController = require("../controllers/appointment");

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  authorizer(["PATIENT"]),
  appointmentController.bookAppointment
);

router.put(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  authorizer(["PATIENT","ADMIN","DOCTOR"]),
  appointmentController.editAppointment
);

module.exports = router;
