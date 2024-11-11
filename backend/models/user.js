const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First Name is required']
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: false,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["M", "F", "O"],
    required: true,
  },
  doctorDepartment: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  docAvatar: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: true,
    enum: ["ADMIN", "DOCTOR", "PATIENT"],
  },
});

// export const userModel = mongoose.model("user", userSchema);  1st way to export
const userModel = mongoose.model("user", userSchema);

module.exports = userModel; // 2nd Way to export
