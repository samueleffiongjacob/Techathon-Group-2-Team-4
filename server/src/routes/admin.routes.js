const express = require("express");
const {
  getUserById,
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/admin.controller");
const {
  superadminRequired, 
  adminRequired,
} = require("../middleware/auth.middleware") && require("../middleware/verifyRole.middleware");
const userRouter = express.Router();

userRouter.get("/superadmin || admin", superadminRequired, adminRequired, getUserById);
userRouter.post("/superadmin|| admin", createsuperadmin, createadmin);
userRouter.get("/superadmin || admin", superadminRequired, adminRequired, getAllUsers);
userRouter.put("/superadmin || admin", superadminRequired, adminRequired, updateUser);
userRouter.delete("/superadmin", superadminRequired, deleteUser);

module.exports = adminRouter;
