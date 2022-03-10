const User = require("../../models/user");
const jwt = require("jsonwebtoken");

module.exports = {
  create,
};

async function create(req, res) {
  try {
    // add user to the database
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code, 400 = Bad Request
    res.status(400).json(err);
  }
}

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}
