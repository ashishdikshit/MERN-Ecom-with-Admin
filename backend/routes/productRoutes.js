import express from "express";
import {

    createProducts,
  getAllProducts,
  getSingleProduct,
} from "../controller/productController.js";

const router = express.Router();

// Routes
router.route("/").get(getAllProducts);
router.route("/product").get(getSingleProduct).post(createProducts);

export default router;
