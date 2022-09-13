require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { config } = require("./config");
const cookieParser = require("cookie-parser");
const router = require("./routes");
const passport = require("passport");
const { httpLogStream } = require("./utils/logger");
const passportStrategy = require("./passport");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(morgan("combined", { stream: httpLogStream }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(cookieParser());

app.use(
  cookieSession({
    name: "session",
    keys: ["Techathon-Group-2-Team-4", "Teetree"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(router);
app.use("/api", (req, res) => {
  res.send({
    msg: `Hey..........Welcome to ${config.APP_NAME}  API ✔🎈🎉✨ Created by Techathon-Group-2-Team-4 Mentees`,
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: true,
    msg: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? err.stack : undefined,
  });
});
module.exports = app;
