import mongoose from "mongoose";

// process.env.DB_URI from config.env used to connect to MongoDB database

export const connectMongoDB = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(
        "Database connected successfully with host:",
        data.connection.host,
      );
    })
};
