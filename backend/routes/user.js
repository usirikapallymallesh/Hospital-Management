const express = require("express");

const router = express.Router();
const userController = require("../controllers/user");

router.post("/admin/addnew", userController.addNewAdmin); // admin registration of new doctor.
router.post("/doctor/addnew", userController.addNewDoctor); // admin registration singUpDoctor
router.post("/login", userController.loginUser); // login
router.post("/forgot-password", userController.forgottenPassword);
router.post("/reset-password/:token", userController.resetPassword);

module.exports = router;
