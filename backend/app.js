import express from "express";
import product from "./routes/productRoutes.js";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json()); 

app.use("/api/v1", product);
app.use("/", product);

export default app;
