const createLogger = require("../lib/logger");
const {
  createShortUrl,
  redirectUrl,
  getUserUrls,
} = require("../services/url.service");
const asyncHandler = require("../utils/asyncHandler");
const logger = createLogger("auth.controller.js");

exports.createShortUrl = asyncHandler(async (req, res, next) => {
  const { originalUrl } = req.body;

  const baseUrl = `${req.protocol}://${req.get("host")}`;

  const url = await createShortUrl({
    originalUrl,
    baseUrl,
    userId: req.user.id,
  });

  res.status(201).json({
    success: true,
    data: url,
  });
});

exports.redirectToOriginal = asyncHandler(async (req, res) => {
  const { shortCode } = req.params;

  logger.info(`Redirect endpoint hit for ${shortCode}`);

  const originalUrl = await redirectUrl(shortCode);

  res.redirect(originalUrl);
});

exports.getMyUrls = asyncHandler(async (req, res, next) => {
  const urls = await getUserUrls(req.user.id);

  res.status(200).json({
    success: true,
    data: urls,
  });
});
