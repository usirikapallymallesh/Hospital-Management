const bcrypt = require("bcrypt");
const errorHandler = require("../middlewares/errorHandler");
const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const nodeMailer = require("nodemailer");
const {
  welcomeMail,
  forgottenPasswordMail,
} = require("../emails/emailTemplates");
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
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = {
    ...req.body,
    password: hashedPassword,
    role: "DOCTOR",
  };
  const newUser = new userModel(user);
  await newUser.save(); // 2 way saving the data to db

  res.json({
    success: true,
    message: "Doctor successfully added",
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
  res.json({ success: true, token });
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
const userController = {
  addNewAdmin: errorHandler.catchAsync(addNewAdminFn),
  addNewDoctor: errorHandler.catchAsync(addNewDoctorFn),
  loginUser: errorHandler.catchAsync(loginUserApiFn),
  forgottenPassword: errorHandler.catchAsync(forgottenPassword),
  resetPassword: errorHandler.catchAsync(resetPassword),
};

module.exports = userController;
