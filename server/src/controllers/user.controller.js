const UserModel = require("../models/users.model");
const { APIError } = require("../utils/error");
const { logger } = require("../utils/logger");

const createUser = async (req, res, next) => {
  const { username, email, password, address, role } = req.body;

  if (!username) {
    return next(APIError.badRequest("Please supply user name"));
  }

  if (!email) {
    return next(APIError.badRequest("Please supply user email"));
  }

  if (!password) {
    return next(APIError.badRequest("Please supply user password"));
  }

  if (!address) {
    return next(APIError.badRequest("Please supply your address"));
  }

  if (!role) {
    return next(APIError.badRequest("Please supply user role"));
  }

  try {
    const user = await UserModel.create({
      username,
      email,
      password,
      address,
      role,
    });

    res.status(201).json({ msg: "User created successfully", user });
  } catch (error) {
    next(logger.error);
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.query;

  if (!id) {
    return next(APIError.badRequest("Please supply your user ID"));
  }

  try {
    user = await UserModel.findById(id);
    if (!user) {
      return next(
        APIError.notFound("user with the supplied ID does not exist")
      );
    }

    res.status(201).json({ msg: "User fetched successfully", user });
  } catch (error) {
    next(logger.error);
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return next(APIError.badRequest("Please supply the user ID to be updated"));
  }

  try {
    let user = await UserModel.findById(id);
    if (!user) {
      return next(
        APIError.notFound("user with the supplied ID does not exist")
      );
    }

    user = await UserModel.findByIdAndUpdate(id, req.body);
    res.status(201).json({ msg: "User updated successfully", user });
  } catch (error) {
    next(logger.error);
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    return next(
      APIError.badRequest("Please supply the ID of user to be deleted")
    );
  }

  try {
    let user = await UserModel.findById(id);
    if (!user) {
      return next(
        APIError.notFound("user with the supplied ID does not exist")
      );
    }

    user = await UserModel.findByIdAndDelete(id);
    res
      .status(201)
      .json({ msg: `Your with id: ${id} has been deleted successfully` });
  } catch (error) {
    next(logger.error);
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
