const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShortenLinkSchema = new Schema(
  {
    original_link: { type: String, required: true },
    shorten_link: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ShortenLink", ShortenLinkSchema);
