const express = require("express");
const adminRouter = require("./admin.routes");
const authRouter = require("./auth.routes");
const userRouter = require("./users.routes");
const router = express.Router();

router.use("/users", userRouter);
router.use("./admin", adminRouter);
router.use("./auth", authRouter);

module.exports = router;
