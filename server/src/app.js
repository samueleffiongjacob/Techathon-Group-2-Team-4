require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { config } = require("./config");
const cookieParser = require("cookie-parser");
const router = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());

app.use(router);
app.use("/api", (req,res) => {
	res.send({
		msg: `Hey..........Welcome to ${config.APP_NAME}  API ✔🎈🎉✨ Created by Techathon-Group-2-Team-4 Mentees`,
	});
});

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ error: true, msg: err.message || "Internal Server Error" });
});
module.exports = app;