const mongoose = require("mongoose");
const { logger } = require('../utils/logger');
const { DB_URI } = require('../utils/secrets');

exports.connectDB = async () => {
	try{
		await mongoose.connect(process.env.DB_URI);
	} catch (err) {
		console.log (`Error connecting to DataBase: ${err.message}`);
		process.exit(-1);
	}
};