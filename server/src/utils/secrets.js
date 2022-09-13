require("dotenv/config");

const { logger } = require("./logger");

const {
  DB_URI,
  SALT,
  BASE_URL,
  HOST,
  SERVICE,
  SECURE,
  USER,
  PASS,
  JWT_SECRET_TOKEN,
  JWT_REFRESH_TOKEN,
  NODE_ENV,
  CLIENT_URL,
  CLIENT_ID,
  CLIENT_SECRET,
} = process.env;

const requiredCredentials = [
  "DB_URI",
  "SALT",
  "BASE_URL",
  "HOST",
  "SERVICE",
  "SECURE",
  "USER",
  "PASS",
  "JWT_SECRET_TOKEN",
  "JWT_REFRESH_TOKEN",
  "NODE_ENV",
  "CLIENT_URL",
  "CLIENT_ID",
  "CLIENT_SECRET",
];

for (const credential of requiredCredentials) {
  if (process.env[credential] === undefined) {
    logger.error(`Missing required crendential: ${credential}`);
    process.exit(1);
  }
}

module.exports = {
  DB_URI,
  SALT,
  BASE_URL,
  HOST,
  SERVICE,
  SECURE,
  USER,
  PASS,
  JWT_SECRET_TOKEN,
  JWT_REFRESH_TOKEN,
  NODE_ENV,
  CLIENT_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  DB_URI,
  JWT_SECRET_TOKEN,
  JWT_REFRESH_TOKEN,
  NODE_ENV,
};
