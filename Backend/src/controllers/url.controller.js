const createLogger = require("../lib/logger");
const logger = createLogger("auth.controller.js");

exports.createShortUrl = async (req, res, next) => {
  try {
    const { originalUrl } = req.body;

    logger.info("Create short URL endpoint hit");

    return res.status(201).json({
      success: true,
      message: "Create short URL controller placeholder",
    });
  } catch (error) {
    next(error);
  }
};

exports.getMyUrls = async (req, res, next) => {
  try {
    logger.info("Get my URLs endpoint hit");

    return res.status(200).json({
      success: true,
      message: "Get my URLs controller placeholder",
    });
  } catch (error) {
    next(error);
  }
};

exports.redirectToOriginal = async (req, res, next) => {
  try {
    const { shortCode } = req.params;

    logger.info(`Redirect endpoint hit for ${shortCode}`);

    return res.status(302).json({
      success: true,
      message: "Redirect controller placeholder",
    });
  } catch (error) {
    next(error);
  }
};
