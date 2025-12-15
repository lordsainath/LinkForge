const createLogger = require("../lib/logger");
const logger = createLogger("auth.controller.js");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // TEMP: logic will be added later
    logger.info("Register endpoint hit");

    return res.status(201).json({
      success: true,
      message: "Register controller placeholder",
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    logger.info("Login endpoint hit");

    return res.status(200).json({
      success: true,
      message: "Login controller placeholder",
    });
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  try {
    logger.info("Logout endpoint hit");

    return res.status(200).json({
      success: true,
      message: "Logout controller placeholder",
    });
  } catch (error) {
    next(error);
  }
};
