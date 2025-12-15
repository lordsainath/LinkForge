const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const createLogger = require("./src/lib/logger");
const logger = createLogger("app.js");

const app = express();
const routes = require("./src/routes/index");

// global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Cookies
app.use(cookieParser());

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  })
);

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
});

// routes

app.use("/api", routes);
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// globar error handler
app.use((err, req, res, next) => {
  logger.error(err.message, err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
