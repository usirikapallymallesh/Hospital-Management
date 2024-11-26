const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    firstName: {
      // details of the patient for whom the appointment is being booked .
      type: String,
      required: [true, "first Name Is Required"],
      minLength: [3, "First Name must be at least 3 characters"],
    },
    lastName: {
      // details of the patient for whom the appointment is being booked .
      type: String,
      required: [true, "Last Name Is Required"],
      minLength: [3, "Last Name must be at least 3 characters"],
    },
    email: {
      // details of the patient for whom the appointment is being booked .
      type: String,
      required: [true, "Email Is Required"],
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
      default: "",
    },
    phone: {
      // details of the patient for whom the appointment is being booked .
      type: String,
      required: [true, "Phone Number Is Required"],
      minLength: [10, "Phone Number must be at least 10 characters"],
    },
    uid: {
      type: String,
      required: [true, "UID Is Required"],
      minLength: [10, "UID must be at least 10 characters"],
    },
    hasVisited: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      required: [true, "Address Is Required"],
    },
    doctorId: {
      type: mongoose.Schema.ObjectId,
      required: [true, "doctor id is invalid"],
      ref: "user",
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      required: [true, "patient id is invalid"],
      ref: "user",
    },
    status: {
      type: String,
      required: [true, "Status Is Required"],
      enum: ["Pending", "Approved", "Rejected", "Cancelled"],
      default: "Pending",
    },
    gender: {
      type: String,
      required: [true, "Gender Is Required"],
      enum: ["M", "F", "O"],
    },
    dob: {
      type: Date,
      required: [true, "Date of Birth Is Required"],
    },
    appointmentDate: {
      type: Date,
      required: [true, "Appointment Date Is Required"],
    },
    department: {
      type: String,
      required: [true, "Department Is Required"],
    },
  },
  { timestamps: true }
);

const appointmentModel = mongoose.model("Appointments", appointmentSchema);

module.exports = appointmentModel;
