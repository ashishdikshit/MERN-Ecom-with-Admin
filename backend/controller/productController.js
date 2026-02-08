import Product from "../models/productModels.js";
import HandleError from "../utils/handleError.js";
//  Creating Product Controller Functions

export const createProducts = async (req, res) => {
  console.log(req.body);

  //here Product.create() is a mongoose method to create a new product in the database
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product, // product is the newly created product document
  });
};

// Get all the products
export const getAllProducts = async (req, res) => {
  const products = await Product.find(); // Fetch all products from the database
  res.status(200).json({
    message: "All products",
    success: true,
    products, // Return the list of products
  });
};

// Update product

export const updateProduct = async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // Return the updated product document insted of the original document
    runValidators: true, // Run schema validators on the update operation
    // useFindAndModify: false, // Use native findOneAndUpdate() instead of findAndModify()
  });
  if (!product) {
    return next(new HandleError("Product not found", 404));
  }
  res.status(200).json({ success: true, message: "Update product", product });
};

// delete product

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return next(new HandleError("Product not found", 404));
    }
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Accessing single product details

export const getSingleProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return next(new HandleError("Product not found", 404));
    }
    res.status(200).json({
      success: true,
      message: "Single product",
      product, // Return the single product details
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
