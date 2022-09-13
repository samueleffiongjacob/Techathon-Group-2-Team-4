const express = require("express");
const {
  signup: signupValidator,
  signin: signinValidator,
} = require("../validators/auth");

const {
  createSuperadmin,
  getUserById,
  createAdmin,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/admin.controller");

const { superadminRequired, adminRequired } =
  require("../middleware/auth.middleware") &&
  require("../middleware/verifyRole.middleware");
const adminRouter = express.Router();

// route to create admin and superadmin
adminRouter
  .route("/superadmin|| admin", createSuperadmin, createAdmin)
  .post(signupValidator, signinValidator);

// routing admin || superadmin to get a single user
adminRouter
  .route("/superadmin || admin", superadminRequired, adminRequired, getUserById)
  .get(signupValidator, signinValidator);

// routing admin || superadmin to get all  user
userRouter
  .route("/superadmin || admin", superadminRequired, adminRequired, getAllUsers)
  .get(signupValidator, signinValidator);

// routing admin ||superadmin to get correct  user information
userRouter
  .route("/superadmin || admin", superadminRequired, adminRequired, updateUser)
  .put(signupValidator, signinValidator);
userRouter
  .route("/superadmin", superadminRequired, deleteUser)
  .delete(signupValidator, signinValidator);

module.exports = adminRouter;
