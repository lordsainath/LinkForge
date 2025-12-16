const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createLogger = require("../lib/logger");
const logger = createLogger("auth.service.js");

const ApiError = require("../utils/apiError");
const userModel = require("../models/user.model");

const generateToken = (userid) => {
  return jwt.sign({ userid }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// register User
const register = async ({ name, email, password }) => {
  const existingUser = await userModel.findOne({ email });

  if (existingUser) {
    throw new ApiError(409, "Email already registered");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashpwd = await bcrypt.hash(password, salt);

  const user = await userModel.create({
    name,
    email,
    password: hashpwd,
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
};

// login user
const login = async ({ email, password }) => {
  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    throw new ApiError(409, "Invalid email or password");
 
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
     throw new ApiError(409, "Invalid email or password");
  }

  const token = generateToken(user._id);

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  };
};

module.exports = { register, login };
