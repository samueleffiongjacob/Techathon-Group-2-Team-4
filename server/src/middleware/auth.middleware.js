// destructing and importing dependencies
const { APIError } = require("../utils/error");
const { verify, JsonWebTokenError } = require("jsonwebtoken");

// User verification error message
const userRequired = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return next(APIError.unauthenticated());
    }
    const token = authorization.split(" ")[1];
    const authload = verify(token, process.env.JWT_SECRET_TOKEN);
    req.userId = authload.id;
    req.userRole = authload.role;
    next();
  } catch (error) {
    let err = error;
    if (error instanceof JsonWebTokenError) {
      err = APIError.badRequest("Invalid or Expired Token Supplied");
    }
    next(err);
  }
};

// Admin and superadmin verification error message

exports.superadminRequired = async (req, res, next) => {
  try {
    const isSuperadmin = req.userRole === "superadmin";
    if (!isSuperadmin) {
      return next(
        APIError.unauthorized(
          "Only OVERALL HR IS PERMITTED is allowed to access this endpoint"
        )
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};

exports.adminRequired = async (req, res, next) => {
  try {
    const isAdmin = req.userRole === "admin";
    if (!isAdmin) {
      return next(
        APIError.unauthorized("Only Admin is allowed to access this endpoint")
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};

// User with role verification error message

exports.clientRequired = async (req, res, next) => {
  try {
    const isClient = req.userRole === "client";
    if (!isClient) {
      return next(
        APIError.unauthorized(
          "Only client USERS is allowed to access this endpoint"
        )
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};

exports.paidclientRequired = async (req, res, next) => {
  try {
    const isPaidclient = req.userRole === "paidclient";
    if (!isPaidclient) {
      return next(
        APIError.unauthorized(
          "Only Premium users is allowed to access this endpoint"
        )
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};
