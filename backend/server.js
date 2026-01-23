import app from "./app.js";
import dotenv from "dotenv";
// const PORT = process.env.PORT || 5000;

dotenv.config({ path: "backend/config/config.env" });

const PORT = process.env.PORT || 5000;



// It is copied to show how controller functions were used earlier directly in app.js file
// The functions are now moved to controller/productController.js and imported in routes/productRoutes.js file

// const getAllProducts = (req, res) => {
//   res.status(200).json({ message: "All products" });
// };

// const getSingleProduct = (req, res) => {
//   res.status(200).json({ message: "Single product" });
// };

// app.get("/", getAllProducts);
// app.route("/").get(getAllProducts);

//app.get("/api/v1/product", getSingleProduct);
// app.route("/api/v1/product").get(getSingleProduct);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
