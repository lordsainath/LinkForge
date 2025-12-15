const winston = require("winston");

const logLevel = process.env.LOG_LEVEL || "info";
const isProduction = process.env.NODE_ENV === "production";

const baseLogger = winston.createLogger({
  level: logLevel,
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    winston.format.printf(({ timestamp, level, message, label, stack }) => {
      return `[${timestamp}] ${level} (${label}): ${stack || message}`;
    })
  ),
  transports: [
    new winston.transports.Console({
      format: isProduction
        ? winston.format.simple()
        : winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
          ),
    }),
  ],
  exitOnError: false,
});

/**
 * Logger factory
 */
function createLogger(label) {
  return baseLogger.child({ label });
}

module.exports = createLogger;
