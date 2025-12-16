const urlModel = require("../models/url.model");
const apierror = require("../utils/apiError");
const creatlogger = require("../lib/logger");
const logger = creatlogger("url.service.js");
const crypto = require("crypto");

const generateShortCode = () => {
  return crypto.randomBytes(4).toString("hex");
};

const createShortUrl = async ({ originalUrl, userId, baseUrl }) => {
  if (!originalUrl) {
    throw new apierror(400, "Original URL is required");
  }

  let shortCode;
  let exists = true;

  while (exists) {
    shortCode = generateShortCode();
    exists = await urlModel.findOne({ shortCode });
  }

  const shortUrl = `${baseUrl}/api/url/${shortCode}`;

  const url = await urlModel.create({
    originalUrl,
    shortCode,
    shortUrl,
    userId: userId,
  });

  return url;
};

const redirectUrl = async (shortCode) => {
  const url = await urlModel.findOne({ shortCode });

  if (!url || !url.isActive) {
    throw new apierror(404, "URL not found or inactive");
  }

  url.clicks += 1;
  await url.save();

  return url.originalUrl;
};


const getUserUrls = async (userId) => {
  return (await urlModel.find({ userId }))
}

module.exports = { createShortUrl, redirectUrl,getUserUrls };
