// Importing desstructing mongoose from installed mongoose

const { Schema, model } = require("mongoose");
const { logger } = require("../utils/logger");

const id = new ObjectID();

// USERS SCHEMA CREATION FOR ALL USER CREATION MODELS
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    activated: {
      type: Boolean,
      require: true,
      default: false,
    },

    address: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
      default: "users",
      enum: ["users", "paidclient"],
    },
    refreshToken: {
      type: String,
    },
  },

  // TIME STAMP WOULD BE RESPONSIBLE TO CREATE & UPDATE  DATE & TIME FOR USERS

  // REGISTER IN THE DATABASE

  { timestamps: true }
);

// ASSIGNING SCHEMA ORDER MODELS TO 1 CONSTANT
const UserModel = model("users", UserSchema);

// EXPORTING THE THE MODELS
module.exports = UserModel;
