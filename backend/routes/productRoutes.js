import express from "express";
import {
  getAllProducts,
  getSingleProduct,
} from "../controller/productController.js";

const router = express.Router();

// Routes
router.route("/").get(getAllProducts);
router.route("/product").get(getSingleProduct);

export default router;
