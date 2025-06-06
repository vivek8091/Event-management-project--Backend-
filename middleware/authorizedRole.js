const authorizedRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No user information found." });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res
        .status(403)
        .json({
          message:
            "Forbidden: You do not have permission to access this resource.",
        });
    }

    next();
  };
};


module.exports = authorizedRoles;