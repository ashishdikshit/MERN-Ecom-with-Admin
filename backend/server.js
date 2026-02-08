import app from "./app.js";
import dotenv from "dotenv";
import { connectMongoDB } from "./config/db.js";
dotenv.config({ path: "backend/config/config.env" });
connectMongoDB();

// Handle uncaught exception errors
process.on("uncaughtException", (err) => {
  // Log the error message and shut down the server gracefully to prevent it from running in an unstable state.

  console.log(`Error : ${err.message}`);
  console.log(`Server is shutting down due to uncaught exception errors`);
  process.exit(1);
});

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
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle unhandled promise rejections globally in the application.
// This is important to catch any unhandled errors that may occur during asynchronous operations,
// such as database queries or API calls. By listening for the "unhandledRejection" event on the process object,
// we can log the error message and gracefully shut down the server to prevent it from running in an unstable state.
// This helps improve the reliability and stability of the application by ensuring
// that unhandled errors are properly handled and do not cause unexpected behavior or crashes.
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
