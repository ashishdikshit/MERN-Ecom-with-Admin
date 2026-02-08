

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  res.status(err.statusCode).json({
    success: false, 
    message: err.message,
  });
};
// This middleware function is designed to handle errors in an Express application.
// It takes four parameters: err (the error object), req (the request object), res (the response object), and next (a function to pass control to the next middleware).
// The function first checks if the error object has a statusCode property; if not, it defaults to 500 (Internal Server Error). It also checks if the error object has a message property; if not, it defaults to "Internal Server Error".
// Finally, it sends a JSON response with the status code and a message indicating that the operation was unsuccessful, along with the error message. This allows for centralized error handling in the Express application, ensuring that all errors are handled consistently.
