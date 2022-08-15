import express from "express";
import UserService from "../service/User.service.js";
import { protect } from "../midleware/authMidleware.js";
const service = new UserService();
const router = express.Router();
router.route("/").post(service.setUser);
router.post("/login", service.authUser);
router.route("/profile").get(protect, service.getUserProfile)
.put(protect,service.updateUserProfile);
export default router;
