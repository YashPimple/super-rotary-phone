const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email is already in use"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    receiveMails: {
      type: Boolean,
      default: false,
    },
    weight: {
      type: Number,
      required: [true, "Weight is required"],
    },
    height: {
      type: Number,
      required: [true, "Height is required"],
    },
    bmi: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
