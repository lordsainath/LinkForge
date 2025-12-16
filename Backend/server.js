require("dotenv").config();

const { createServer } = require("http");
const app = require("./app");
const createLogger = require("./src/lib/logger");
const connectDB = require("./src/config/db");
const logger = createLogger("server.js");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    const server = createServer(app);
    server.listen(PORT, () => {
      logger.info("server started");
    });
  } catch (error) {
    logger.error("Server startup failed");
    process.exit(1);
  }
};

startServer();
