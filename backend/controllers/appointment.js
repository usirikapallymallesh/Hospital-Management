const { catchAsync } = require("../middlewares/errorHandler");
const appointmentModel = require("../models/appointment");
const bookAppointmentApiFn = async (req, res) => {
  //todo validation of data
  console.log(req.body);
  await appointmentModel.create({
    ...req.body,
    userId: req.user._id, // assuming user is logged in and has their id stored in req.user._id
  });
  res.status(200).json({
    success: true,
    message: "appointment booked was successfully",
  });
};

const editAppointmentApiFn = async (req, res) => {
  const userId = req.user._id; // the logged in user id
  const appointmentId = req.params.id; // the id of the appointment to be edited
  const appointment = await appointmentModel.findByIdAndUpdate(appointmentId);
  // restrict for the user to see and edit appointment to the user's.
  if (
    (req.user.role == "DOCTOR" && userId !== appointment.doctor) ||
    (req.user.role == "PATIENT" && userId !== appointment.userId)
  ) {
    res.status(403).json({
      success: false,
      message: "You are not authorized to edit this appointment",
    });
  }

  res.status(200).json({
    success: true,
    message: "appointment edited successfully",
  });
};

const appointmentController = {
  bookAppointment: catchAsync(bookAppointmentApiFn),
  editAppointment: catchAsync(editAppointmentApiFn),
};

module.exports = appointmentController;
