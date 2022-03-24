const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rosterSchema = new Schema(
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

module.exports = mongoose.model("Roster", rosterSchema);
