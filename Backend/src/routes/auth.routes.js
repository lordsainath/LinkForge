const express = require("express");
const { register, login, logout } = require("../controllers/auth.controller");
const router = express.Router();

//public
router.post("/register", register);
router.post("/login", login);

//protected
router.post("/logout", logout);

module.exports = router;
