require("dotenv").config();
require("./config/database");

const User = require("./models/user");
const Team = require("./models/team");
const Player = require("./models/player");

let u, t, p;
