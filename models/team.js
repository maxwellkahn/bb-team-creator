const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sortOrder: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Team", teamSchema);
