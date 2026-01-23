import app from "./app.js";
import dotenv from "dotenv";
// const PORT = process.env.PORT || 5000;

dotenv.config({ path: "backend/config/config.env" });

const PORT = process.env.PORT || 5000;

const getAllProducts = (req, res) => {
  res.status(200).json({ message: "All products" });
};

const getSingleProduct = (req, res) => {
  res.status(200).json({ message: "Single product" });
};

app.get("/", getAllProducts);
app.route("/api/v1/product").get(getSingleProduct);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
