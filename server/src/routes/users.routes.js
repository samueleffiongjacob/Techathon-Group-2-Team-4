const express = require("express");
const {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const {
  userRequired
} = require("../middleware/auth.middleware") && require("../middleware/verifyRole.middleware");
const userRouter = express.Router();

userRouter.get("/", getUserById);
userRouter.post("/", createUser);
userRouter.put("/", userRequired, updateUser);
userRouter.delete("/", userRequired, deleteUser);

module.exports = userRouter;
