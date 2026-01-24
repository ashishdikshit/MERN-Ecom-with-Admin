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

export const getAllProducts = (req, res) => {
  res.status(200).json({ message: "All products" });
};

export const getSingleProduct = (req, res) => {
  res.status(200).json({ message: "Single product" });
};
