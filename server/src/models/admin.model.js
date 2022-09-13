// Importing desstructing mongoose from installed mongoose

const { Schema, model } = require("mongoose");

const id = new ObjectID();

// Admin SCHEMA CREATION FOR ALL SUPERUSER CREATION MODELS
const AdminSchema = new Schema(
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
      default: "superadmin",
      enum: ["superadmin", "admin"],
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
const AdminModel = model("admin", UserSchema);

// EXPORTING THE THE MODELS
module.exports = AdminModel;
