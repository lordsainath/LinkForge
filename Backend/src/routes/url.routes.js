const express = require("express");
const {
  createShortUrl,
  getMyUrls,
  redirectToOriginal,
} = require("../controllers/url.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

// protected
router.post("/", authMiddleware,createShortUrl);
router.get("/me", authMiddleware,getMyUrls);

// public
router.get("/:shortCode", redirectToOriginal);

module.exports = router;
