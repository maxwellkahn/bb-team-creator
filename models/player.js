const mongoose = require("mongoose");
require("./team");
const playerSchema = require("./playerSchema");

module.exports = mongoose.model("Player", playerSchema);
