// requiring dependcy
const { hashSync, compareSync } = require("bcryptjs");
const { generate: generateToken } = require("../utils/token");
const UserModel = require("../models/users.model");
const AdminModel = require("../models/admin.model");
const { buildResponse, buildUser } = require("../utils/index");
const sendEmail = require("../utils/sendEmail");
const Token = require("../models/token");
const crypto = require("crypto");
const { APIError } = require("../utils/error");
const { Grouter } = require("../controllers/googleauth.controller");

// USER RETRATION
exports.register = async (req, res, next) => {
  try {
    const { username, password, role, email, address } = req.body;
    if (!email || !password || !role || !username || !address) {
      return next(APIError.badRequest(`Field(s) missing. Please try again`));
    }

    const oldAccount = await (UserModel || AdminModel).findOne({ email });
    if (oldAccount) {
      return next(
        APIError.customError(
          `An Account with the email ${email} already exist...`,
          409
        )
      );
    }
    const hashPassword = hashSync(password, 12);
    const newUser = await UserModel.create({
      username,
      role,
      password: hashPassword,
      email,
      address,
    });
    const newSuperadmin = await AdminModel.create({
      username,
      role,
      password: hashPassword,
      email,
      address,
    });
    const newAdmin = await AdminModel.create({
      username,
      role,
      password: hashPassword,
      email,
      address,
    });

    // EMAIL TOKEN  for SENDing EMAIL TO CLIENT
    const token = await new Token({
      usersId: users._id,
      adminId: admin._id,
      superadmin: superadmin._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();
    const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`;
    await sendEmail(user.email, "Verify Email", url);

    res
      .status(201)
      .send({ message: "An Email sent to your account please verify" });

    // passport-google-oauth20
    Grouter.get(
      "/google",
      passport.authenticate("google", ["profile", "email"])
    );
    Grouter.get(
      "/google/callback",
      passport.authenticate("google", {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/login/failed",
      })
    );
    res.status(200).send({ message: "Email verified successfully" });

    // RE sending email verification
    Grouter.get("/:id/verify/:token/", async (req, res) => {
      try {
        const user =
          (await user) || admin || superadmin.findOne({ _id: req.params.id });
        if (!user) return res.status(400).send({ message: "Invalid link" });

        const token = await Token.findOne({
          userId: user._id,
          adminId: admin._id,
          superadmin: superadmin._id,
          token: req.params.token,
        });
        if (!token) return res.status(400).send({ message: "Invalid link" });

        await user.updateOne({ _id: user._id, activated: true });
        await token.remove();

        res.status(200).send({ message: "Email verified successfully" });
      } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    const data = buildUser(newUser || newAdmin || newSuperadmin.toObject());

    res
      .status(201)
      .json(buildResponse("Account Created Successfully", data, "account"));
  } catch (err) {
    next(err);
  }
};

// USER LOGIN
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await (UserModel || AdminModel).findOne({ email });
    if (!user) {
      return next(
        APIError.notFound("Sorry, No Account with that email or password")
      );
    }
    if (!password) {
      return next(
        APIError.customError("Sorry, Invalid password for this user", 400)
      );
    }
    const validPassword = compareSync(password, user.password);
    if (!validPassword) {
      return next(
        APIError.customError("Sorry, Invalid password for this user", 400)
      );
    }

    const accessSecret = process.env.JWT_SECRET_TOKEN;
    const refreshSecret = process.env.JWT_REFRESH_TOKEN;
    const authload = { id: user._id, role: user.role };

    const token = jwt.sign(authload, accessSecret, { expiresIn: "30m" });
    const refreshToken = jwt.sign(authload, refreshSecret, { expiresIn: "1d" });

    user.refreshToken = refreshToken;
    await user.save();

    const data = buildUser(user.toObject());

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res
      .status(200)
      .json(
        buildResponse("Account Logged-in successfully", data, "user", { token })
      );
  } catch (err) {
    next(err);
  }
};

// USER CAN STAY AS LONG AS THE WANT
exports.refreshToken = async (req, res, next) => {
  try {
    const cookies = req.cookies;
    if (!cookies?.jwt) {
      return next(APIError.unauthenticated(`You need to login`));
    }

    const refreshToken = cookies.jwt;
    const user = await (UserModel || AdminModel).findOne({ refreshToken });

    if (!user) {
      return next(APIError.customError(`Forbidden`, 403));
    }
    const verifyRefreshToken = await jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_TOKEN
    );
    if (!verifyRefreshToken)
      return next(APIError.customError(`Forbidden`, 403));
    const authload = { id: user._id, role: user.role };
    const accessSecret = process.env.JWT_SECRET_TOKEN;
    const token = jwt.sign(authload, accessSecret, { expiresIn: "30m" });
    res.json({ token });
  } catch (err) {
    next(err);
  }
};

// USER CAN LOGOUT
exports.logout = async (req, res, next) => {
  try {
    const cookies = req.cookies;
    if (!cookies?.jwt) {
      return next(APIError.customError(`No content, success`, 204));
    }
    const refreshToken = cookies.jwt;
    const user = await UserModel.findOne({ refreshToken });

    if (!user) {
      res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      return res.sendStatus(204);
    }

    user.refreshToken = "";
    await user.save();
    res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
    res.status(200).json(`You have successfully logged out `);
  } catch (err) {
    next(err);
  }
};
