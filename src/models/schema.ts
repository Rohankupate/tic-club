// DB Schema here

import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
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
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyUserToken: String,
  verifyUserTokenExpiry: Date,
});

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;
