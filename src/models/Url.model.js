const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UrlSchema = new Schema(
  {

    originalUrl: {
      type: String,
      required: true,
    },

    shortCode: {
      type: String,
      required: true,
      unique: true,
    },

  },

  { timestamps: true }
);

module.exports = mongoose.model("Url", UrlSchema);