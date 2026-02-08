export default (myErrorFun) => {
  return (req, res, next) => {
    Promise.resolve(myErrorFun(req, res, next)).catch(next);
  };
};
// This middleware function is designed to handle asynchronous errors in Express routes. 
// It takes a function (myErrorFun) as an argument and returns a new function that wraps the original function in a Promise. 
// When the returned function is called, it executes the original function (myErrorFun) and attaches a catch block to handle any errors that may occur during its execution. 
// If an error is thrown, it will be passed to the next middleware function in the Express error handling chain using the next() function. 
// This allows for centralized error handling in Express applications, making it easier to manage and respond to errors consistently across different routes.
