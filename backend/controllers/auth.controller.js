const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authValidation = require("../helpers/joi_validation/auth.validation_schema");
const httpErrors = require("http-errors");
const moment = require("moment");

// Access token which should be stored in client to authorize user (expires in 1 hour)
const generateAccessToken = (user) => {
  return jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
};

// Refresh token which should be stored in client to refresh/rotate access token (expires in 1 day)
const generateRefreshToken = (user) => {
  return jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

// METHOD: POST
// ROUTE: /auth/register
const registerUser = asyncHandler(async (req, res) => {
  try {
    // Validate user schema
    const userDetails =
      await authValidation.userRegistrationSchema.validateAsync(req.body);

    // Check if user already exists
    const userExists = await User.find({ email: userDetails.email });
    if (userExists?.length) {
      res.status(409);
      throw httpErrors.Conflict(`Email ${userDetails.email} already in use`);
    }
    // hash password to save in DB
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
      res.status(201).send({
        error: false,
        data: {
          userDetails: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
          message: "User created successfully",
        },
      });
    } else {
      res.status(500).send({
        error: true,
        data: {
          message: "Something went wrong while creating user",
        },
      });
    }
  } catch (error) {
    let errorObj = {
      error: true,
      data: {
        message: error.message,
      },
    };
    if (error?.isJoi) {
      res.status(422); // if the error has been occured due to schema validation then set the status to "Unprocessable Entity"
    }
    res.send(errorObj);
  }
});

// METHOD: POST
// ROUTE: /auth/login
const loginUser = asyncHandler(async (req, res) => {
  try {
    const userDetails = await authValidation.userLoginSchema.validateAsync(
      req.body
    );
    const user = await User.findOne({ email: userDetails.email });
    if (!user) {
      res.status(404);
      throw httpErrors.Forbidden(
        "User not found, Please check your Email and try again"
      );
    }
    if (await bcrypt.compare(userDetails.password, user.password)) {
      const access_token = generateAccessToken(user);
      const refresh_token = generateRefreshToken(user);
      res
        .cookie("refresh_token", refresh_token, {
          secure: process.env.NODE_ENV == "production",
          signed: true,
          httpOnly: true,
          sameSite: true,
          expires: new Date(moment().endOf("day")),
        }) // send refresh token as cookie which is http only and access token along with the response
        .send({
          error: false,
          data: {
            access_token,
            userDetails: {
              _id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
            },
          },
        });
    } else {
      res.status(403);
      throw httpErrors.Forbidden("Invalid Password, please try again");
    }
  } catch (error) {
    let errorObj = {
      error: true,
      data: {
        message: error.message,
      },
    };
    if (error?.isJoi) {
      res.status(422); // same as above
    }
    res.send(errorObj);
  }
});

module.exports = {
  registerUser,
  loginUser,
};
