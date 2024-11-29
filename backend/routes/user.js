const express = require("express");

const router = express.Router();
const userController = require("../controllers/user");

const passport = require("../middlewares/auth");
const authorizer = require("../middlewares/authorization");

// registration routes any user
router.post("/patient/register", userController.registerPatient); // registration of patient
router.post(
  "/update",
  passport.authenticate("jwt", { session: false }),
  userController.updateUser
); // update any user who has logged in.
router.post(
  "/admin/add-new",
  passport.authenticate("jwt", { session: false }),
  authorizer(["ADMIN"]),
  userController.addNewAdmin
); // admin registration of new doctor.
router.post(
  "/doctor/add-new",
  //   passport.authenticate("jwt", { session: false }),
  //   authorizer(["ADMIN"]),
  userController.addNewDoctor
); // admin registration singUpDoctor

// login and logout routes for any user registered.
router.post("/login", userController.loginUser);
router.get("/logout", userController.logoutUser);

// password reset routes for any user registered.
router.post("/forgot-password", userController.forgottenPassword);
router.post("/reset-password/:token", userController.resetPassword);

// doctor routes

// router.get("/doctor/:id",passport.authenticate("jwt", { session: false }), authorizer(["ADMIN", "DOCTOR"]), userController.getDoctorById);
router.get("/doctors", userController.getAllDoctors);
router.put(
  "/doctor/:id",
  passport.authenticate("jwt", { session: false }),
  authorizer(["ADMIN", "DOCTOR"]),
  userController.updateDoctor
);
// router.delete("/doctor/:id",passport.authenticate("jwt", { session: false }), authorizer(["ADMIN"]), userController.deleteDoctor);

module.exports = router;
