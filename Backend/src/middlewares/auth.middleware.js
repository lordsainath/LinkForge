const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const apiError = require("../utils/apiError");
const createLogger = require("../lib/logger");
const logger = createLogger('auth.middleware.js')

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new apiError(401, "Authentication required");
    }

    const token = authHeader.split(" ")[1];

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode)
    

    const user = await userModel.findById(decode.userid);

    if (!user) {
      throw new apiError(401, "user not found");
    }

    req.user = {
      id: user._id,
      email: user.email,
    };

    next();
  } catch (error) {
    next(error);
  }
};


module.exports = authMiddleware;