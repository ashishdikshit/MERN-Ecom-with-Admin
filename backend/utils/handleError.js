class HandleError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
    // this is used to capture the stack trace of the error and associate it with 
    // the current class (HandError) instead of the default Error class. 
    // This helps in debugging by providing a more accurate stack trace when an error is thrown.
  }
}

export default HandleError;
