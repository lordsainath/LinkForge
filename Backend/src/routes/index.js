const express = require("express");
const router = express.Router();

const authRoutes = require('../routes/auth.routes')
const urlRoutes = require("../routes/url.routes")


router.use("/auth",authRoutes)
router.use('/url',urlRoutes)



module.exports = router;