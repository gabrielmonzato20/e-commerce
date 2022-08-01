import express from "express";
import ProductService from "../service/Product.service.js";
const service = new ProductService();
const router = express.Router();

router.route("/").get(service.getProducts);
router.route("/:id").get(service.getProductById);
export default router;
