const bcrypt = require("bcrypt");
const errorHandler = require("../middlewares/errorHandler");
const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const nodeMailer = require("nodemailer");
const {
  welcomeMail,
  forgottenPasswordMail,
} = require("../services/emailTemplates");

const uploadFile = require("../services/uploadService");

const registerPatientApiFn = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = {
    ...req.body,
    password: hashedPassword,
    role: "PATIENT",
  };
  await userModel.create(user);
  res.json({
    success: true,
    message: "Patient successfully registered",
  });
};

const loginUserApiFn = async (req, res) => {
  // Authenticate user and generate JWT token
  const { email, password } = req.body;
  // add validations here
  const user = await userModel.findOne({ email });
  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid email or password" });
  }
  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid email or password" });
  }
  const jwtPayload = {
    id: user._id,
    email: user.email,
    role: user.role,
    exp: new Date().getTime() + 24 * 3600 * 1000, // 11 day expiration
  };
  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY);
  res.cookie("jwt", token);
  res.json({ success: true, token });
};

const logoutUserFn = (req, res) => {
  // Logout logic here
  // Clear the token from the response header
  res.clearCookie("token");
  res.json({ success: true, message: "Logged out successfully" });
};

const updateUserApiFn = async (req, res) => {
  const userId = req.user._id; // the logged in user id
  const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, {
    new: true,
  });
  if (!updatedUser) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  res.json({ success: true, message: "User updated successfully" });
};

const addNewAdminFn = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = {
    ...req.body,
    password: hashedPassword,
    role: "ADMIN",
  };
  await userModel.create(user); //1 way saving the data to db
  res.json({
    success: true,
    message: "Admin successfully added",
  });
};

const addNewDoctorFn = async (req, res) => {
  try {
    // Handle file upload
    uploadFile(req, res, async (error) => {
      if (!req.body || !req.body.password) {
        return res
          .status(400)
          .json({ success: false, message: "Missing required fields" });
      }

      // Hashing the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      // Create user object from form data
      let user = {
        ...req.body,
        password: hashedPassword,
        role: "DOCTOR",
      };

      if (error) {
        return res.status(400).json({ success: false, message: error.message });
      }

      // Check if a file was uploaded
      if (!req.file) {
        return res
          .status(400)
          .json({ success: false, message: "No file uploaded" });
      }

      // Add file path to user object
      user.docAvatar = req.file.path; // Add avatar path directly

      // Save user to database
      const newUser = new userModel(user);
      await newUser.save();

      // Send success response
      res.json({
        success: true,
        message: "Doctor successfully added",
        user: user, // Optionally return the saved user data
      });
    });
  } catch (error) {
    next(error);
  }
};

const forgottenPassword = async (req, res) => {
  const { email } = req.body;
  console.log(email);

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide email" });
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found. Please register." });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    const transporter = nodeMailer.createTransport({
      service: "gmail",
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MY_GMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const forgottenPasswordDetails = {
      userName: "John Doe",
      resetLink: `http://localhost:10000/api/v1/user/reset-password/:${token}`,
    };

    const mailOptions = {
      from: "noreply@sliceit.com", // Use the authenticated email
      to: email,
      subject: "Reset Password",
      // text: `To reset your password, please visit this link: http://localhost:3000/reset-password/${token}`,
      html: forgottenPasswordMail(forgottenPasswordDetails),
    };

    await transporter.sendMail(mailOptions);
    res.json({
      success: true,
      message: "Password reset link sent to your email",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while processing your request.",
    });
  }
};

const resetPassword = async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  if (!password) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a new password" });
  }
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  const user = await userModel.findOne({ email: decodedToken.email });
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hashSync(password, salt);
  user.password = hashedPassword;
  await user.save();
  res.json({
    success: true,
    message: "Password reset successfully",
  });
};

const getAllDoctorsFn = async (req, res) => {
  const doctors = await userModel.find({ role: "DOCTOR" });
  res.json({ success: true, doctors });
};

const updateDoctor = async (req, res) => {
  const { id } = req.params;
  const updatedDoctor = await userModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedDoctor) {
    return res
      .status(404)
      .json({ success: false, message: "Doctor not found" });
  }
  return res
    .status(200)
    .json({ success: true, message: "Doctor updated successfully." });
};

const userController = {
  registerPatient: errorHandler.catchAsync(registerPatientApiFn),
  addNewAdmin: errorHandler.catchAsync(addNewAdminFn),
  addNewDoctor: errorHandler.catchAsync(addNewDoctorFn),
  loginUser: errorHandler.catchAsync(loginUserApiFn),
  forgottenPassword: errorHandler.catchAsync(forgottenPassword),
  resetPassword: errorHandler.catchAsync(resetPassword),
  getAllDoctors: errorHandler.catchAsync(getAllDoctorsFn), // fetch list of doctors.
  updateDoctor: errorHandler.catchAsync(updateDoctor), // update doctor's details.
  logoutUser: errorHandler.catchAsync(logoutUserFn), // log out user
  updateUser: errorHandler.catchAsync(updateUserApiFn), // update user's details.
};

module.exports = userController;
