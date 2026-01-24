import Product from "../models/productModels.js";

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
    success: true,
    products, // Return the list of products
  });
};

export const getSingleProduct = (req, res) => {
  res.status(200).json({ message: "Single product" });
};
