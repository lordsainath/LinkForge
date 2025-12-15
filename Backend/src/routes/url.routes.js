const express = require("express");
const {
  createShortUrl,
  getMyUrls,
  redirectToOriginal,
} = require("../controllers/url.controller");
const router = express.Router();

// protected
router.post("/", createShortUrl);
router.get("/me", getMyUrls);

// public
router.get("/:shortCode", redirectToOriginal);

module.exports = router;
