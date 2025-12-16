const createLogger = require("../lib/logger");
const logger = createLogger("error.middleware.js");

module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const message = err.isOperational
    ? err.message
    : "Internal Server Error";

  logger.error(err.message, err);

  res.status(statusCode).json({
    success: false,
    message,
  });
};
