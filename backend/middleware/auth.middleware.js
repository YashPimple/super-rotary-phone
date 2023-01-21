const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const httpErrors = require("http-errors");

const protectedRoute = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization && // Check if request headers contain authorization key
    req.headers.authorization.startsWith("Bearer") // check if starts with "Bearer" (Bearer token)
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Access the token
      const verifyJWT = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = await User.findById(verifyJWT.userId).select("-password");
      next();
    } catch (error) {
      throw httpErrors.Unauthorized("Request not authorized");
    }
  }
  if (!token) {
    throw httpErrors.Unauthorized("Request not authorized, no token");
  }
});

module.exports = {
  protectedRoute,
};
