const jwt = require("jsonwebtoken");
const { JWT_SECRET_TOKEN } = require("../utils/secrets");
const { logger } = require("./logger");

const generate = (id) =>
  jwt.sign({ id }, JWT_SECRET_TOKEN, { expiresIn: "1d" });

const decode = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET_TOKEN);
  } catch (error) {
    logger.error(error);
  }
};

module.exports = {
  generate,
  decode,
};
