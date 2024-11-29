const jwt = require("jsonwebtoken");
const passport = require("passport");
const dotenv = require("dotenv");

dotenv.config();

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

const UserModel = require("../models/user");

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromExtractors([
  (req, res) => req.cookies.jwt,
]);
opts.secretOrKey = jwtSecretKey;

const strategy = new JwtStrategy(opts, async function (jwt_payload, done) {
  const userId = jwt_payload.id;
  const user = await UserModel.findById(userId);
  // console.log(user);
  if (!user) {
    return done("Invalid user", false);
  }
  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
    // or you could create a new account
  }
});

passport.use(strategy);

module.exports = passport;
