const authorizer = (roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      // console.log(req.user);
      next();
    } else {
      res.status(403).json({
        success: false,
        message: "Forbidden",
      });
    }
  };
};

module.exports = authorizer;
