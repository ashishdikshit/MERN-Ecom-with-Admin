import express from "express";
import {
  createProducts,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../controller/productController.js";

const router = express.Router();

// Routes
router.route("/").get(getAllProducts);
router.route("/product").get(getSingleProduct).post(createProducts);
router.route("/product/:id").put(updateProduct).delete(deleteProduct);

export default router;
