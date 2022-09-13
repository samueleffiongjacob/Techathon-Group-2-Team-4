const SUPERADMIN = require("../models/admin.model");
const ADMIN = require("../models/admin.model");
const AdminModel = require("../models/admin.model");
const SUPERADMIN = require("../models/admin.model");
const { APIError } = require("../utils/error");
const { logger } = require("../utils/logger");

/// CREATING SUPERADMIN
const createSuperadmin = async (req, res, next) => {
  const { username, email, password, address, role } = req.body;

  if (!username) {
    return next(APIError.badRequest("Please supply superadmin user name"));
  }

  if (!email) {
    return next(APIError.badRequest("Please supply superadmin user email"));
  }

  if (!password) {
    return next(APIError.badRequest("Please supply superadmin  user password"));
  }

  if (!address) {
    return next(APIError.badRequest("Please supply superadmin your address"));
  }

  if (!role) {
    return next(APIError.badRequest("Please supply superadmin user role"));
  }

  try {
    const superadmin = await SUPERADMIN.create({
      username,
      email,
      password,
      address,
      role,
    });

    res
      .status(201)
      .json({ msg: "superadmin created successfully", superadmin });
  } catch (error) {
    next(logger.error);
  }
};

/// CREATING ADMIN
const createAdmin = async (req, res, next) => {
  const { username, email, password, address, role } = req.body;

  if (!username) {
    return next(APIError.badRequest("Please supply admin user name"));
  }

  if (!email) {
    return next(APIError.badRequest("Please supply admin user email"));
  }

  if (!password) {
    return next(APIError.badRequest("Please supply admin  user password"));
  }

  if (!address) {
    return next(APIError.badRequest("Please supply admin your address"));
  }

  if (!role) {
    return next(APIError.badRequest("Please supply admin user role"));
  }

  try {
    const admin = await ADMIN.create({
      username,
      email,
      password,
      address,
      role,
    });

    res.status(201).json({ msg: "admin created successfully", admin });
  } catch (error) {
    next(logger.error);
  }
};
// CRUD ACCEBILITY
// BOTH SUPERADMIN AND ADMIN CAN GET ALL USERERS
const getAllUsers = async (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    return next(APIError.badRequest("Please supply the user ID"));
  }

  try {
    let superadmin,
      admin = await UserModel.findById(id);
    if (!user) {
      return next(
        APIError.notFound("user with the supplied ID does not exist")
      );
    }

    if (superadmin || admin.role !== "superadmin" || "admin") {
      return next(
        APIError.unauthorized("Only superadmin and admin can access this route")
      );
    }

    superadmin, (admin = await AdminModel.find());
    res
      .status(201)
      .json({ msg: "User fetched successfully", superadmin, admin });
  } catch (error) {
    next(logger.error);
  }
};

// BOTH SUPERADMIN AND ADMIN CAN GET USERS BY ID
const getUserById = async (req, res, next) => {
  const { id } = req.query;

  if (!id) {
    return next(
      APIError.badRequest("Please supply the user ID u you want to fetch ")
    );
  }

  try {
    let superadmin,
      admin = await UserModel.findById(id);
    if (!superadmin || admin !== "superadmin" || "admin") {
      return next(
        APIError.notFound("user with the supplied ID does not exist")
      );
    }

    superadmin, (admin = await AdminModel.find());
    res
      .status(201)
      .json({ msg: "User fetched successfully", superadmin, admin });
  } catch (error) {
    next(logger.error);
  }
};

// BOTH SUPERADMIN AND ADMIN CAN UPDATE USERERS
const updateUser = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return next(APIError.badRequest("Please supply the user ID to be updated"));
  }

  try {
    let superadmin,
      admin = await UserModel.findById(id);
    if (!superadmin || admin !== "superadmin" || "admin") {
      return next(
        APIError.notFound("user with the supplied ID does not exist")
      );
    }

    superadmin, (admin = await UserModel.findByIdAndUpdate(id, req.body));
    res.status(201).json({ msg: "User updated successfully", user });
  } catch (error) {
    next(logger.error);
  }
};

/// ONLY SUPERADMIN CAN DELETE A USER CREDENCIALS.
const deleteUser = async (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    return next(
      APIError.badRequest("Please supply the ID of user to be deleted")
    );
  }

  try {
    let superadmin = await UserModel.findById(id);
    if (!superadmin !== "superadmin") {
      return next(
        APIError.notFound("user with the supplied ID does not exist")
      );
    }

    superadmin = await UserModel.findByIdAndDelete(id);
    res
      .status(201)
      .json({ msg: `User with id: ${id} has been deleted successfully` });
  } catch (error) {
    next(logger.error);
  }
};

module.exports = {
  createSuperadmin,
  createAdmin,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
