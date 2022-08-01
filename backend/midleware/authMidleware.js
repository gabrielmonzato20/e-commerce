import jwt from "jsonwebtoken";
import User from "../domain/models/user.model.js";
import asyncHandler from "express-async-handler";
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decode.userId).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized ,token invalid or expired");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized , witchout bearer token");
  }
});

export { protect };
