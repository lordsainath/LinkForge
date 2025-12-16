const createLogger = require("../lib/logger");
const logger = createLogger("auth.controller.js");
const { register, login } = require("../services/auth.service");
const asyncHandler = require("../utils/asyncHandler");

exports.register = asyncHandler(async (req, res, next) => {
  try {
    const user = await register(req.body);

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    logger.error(error.message);

    return res.status(400).json({
      success: false,
      message: error.message || "Registration failed",
    });
  }
});

exports.login = asyncHandler(async (req, res, next) => {
  try {
    const result = await login(req.body);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    logger.error(error.message);

    return res.status(401).json({
      success: false,
      message: error.message || "Login failed",
    });
  }
});

exports.logout = asyncHandler(async (req, res, next) => {
  try {
    logger.info("Logout endpoint hit");

    return res.status(200).json({
      success: true,
      message: "Logout controller placeholder",
    });
  } catch (error) {
    next(error);
  }
});
