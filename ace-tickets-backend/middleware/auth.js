const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User'); // User model

require('dotenv').config(); // For using environment variables

// Passport JWT options
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET // Environment variable
};

// JWT Strategy for passport
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.userId);
      if (user) {
        return done(null, user);
      }
      return done(null, false); // No user found
    } catch (err) {
      console.error(err);
      return done(err, false);
    }
  })
);

// Middleware to protect routes
const authenticateJWT = passport.authenticate('jwt', { session: false });

module.exports = { passport, authenticateJWT };
