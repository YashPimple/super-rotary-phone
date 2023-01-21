const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authValidation = require("../helpers/joi_validation/auth.validation_schema");
const httpErrors = require("http-errors");

const registerUser = asyncHandler(async (req, res) => {
  try {
    // Validate user schema
    const userDetails =
      await authValidation.userRegistrationSchema.validateAsync(req.body);

    // Check if user already exists
    const userExists = await User.find({ email: userDetails.email });
    if (userExists?.length) {
      throw httpErrors.Conflict(`Email ${userDetails.email} already in use`);
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(userDetails.password, salt);
    // Create new user
    const user = await User.create({
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      password: hashedPassword,
      receiveMails: userDetails.receiveMails,
    });
    if (user) {
      res.send({
        error: false,
        data: {
          userDetails: user,
          message: "User created successfully",
        },
      });
    } else {
      res.send({
        error: true,
        data: {
          message: "Something went wrong while creating user",
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      error: true,
      status: error?.isJoi ? 422 : 500,
      data: {
        message: error.message,
      },
    });
  }
});

module.exports = {
  registerUser,
};
