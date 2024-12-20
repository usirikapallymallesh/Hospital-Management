const catchAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      // console.error("Error occurred", error);
      next(error);
    }

    //this is called from the express server
    // Promise.resolve(fn(req, res, next)).catch((err) => {
    //   next(err);
    // });
  };
};

// special middleware for the error handling
const errorHandler = (err, req, res, next) => {
  // console.error(err.code);
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "User with email exists already",
    });
  }
  res.status(500).json({
    success: false,
    message: err,
  });
};

module.exports = {
  catchAsync,
  errorHandler,
};
