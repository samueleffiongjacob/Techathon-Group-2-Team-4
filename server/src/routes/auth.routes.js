const express = require("express")
const authRouter = express.Router();
const {register, login, logout,refreshToken,} = require("../controllers/auth.controller");


const { userRequired,superadminRequired,adminRequired } = require("../middleware/auth.middleware") && require("../middleware/verifyRole.middleware");;

authRouter.post("/register", register);
authRouter.post("/login", superadminRequired,adminRequired,userRequired,login);
authRouter.post("/logout", superadminRequired,adminRequired,userRequired, logout);
authRouter.post("/refreshToken", superadminRequired,adminRequired,userRequired, refreshToken);

module.exports = authRouter;