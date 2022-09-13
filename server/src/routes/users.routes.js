const express = require("express");
const {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const { userRequired } =
  require("../middleware/auth.middleware") &&
  require("../middleware/verifyRole.middleware");
const {
  signup: signupValidator,
  signin: signinValidator,
} = require("../validators/auth");

const userRouter = express.Router();

userRouter.route("/", getUserById).get(signupValidator, signinValidator);
userRouter.route("/", createUser).post(signupValidator, signinValidator);
userRouter
  .route("/", userRequired, updateUser)
  .put(signupValidator, signinValidator);
userRouter
  .route("/", userRequired, deleteUser)
  .delete(signupValidator, signinValidator);

module.exports = userRouter;
