const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { config } = require("./config");

const app = express();

app.use(morgan("dev"));
app.use(cors());

app.use("api", (req,res) => {
	res.send({
		msg: `Hey..........Welcome to ${config.APP_NAME}  API ✔🎈🎉✨ Created by Techathon-Group-2-Team-4 Mentees`,
	});
});

module.exports = app;