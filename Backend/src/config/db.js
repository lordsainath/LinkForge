const mongoose = require("mongoose");
const createLogger = require("../lib/logger");
const logger = createLogger("db.js");

const connectDB = async () => {
  const mongourl = process.env.MONGODB_URL;
  if (!mongourl) {
    logger.error("MONGODB_URL is not defined in environment variables");
    process.exit(1);
  }
  try {
    await mongoose.connect(mongourl);
    logger.info("MongoDB Atlas connected");
  } catch (error) {
    logger.error(`MongoDB connection failed: ${error.message}`);

    process.exit(1);
  }
};

module.exports = connectDB;
