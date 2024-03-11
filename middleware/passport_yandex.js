const YandexStrategy = require("passport-yandex").Strategy;
const User = require("../models/user");
const logger = require("../logger/index");

require("dotenv").config();

passport.use(
  new YandexStrategy(
    {
      clientID: YANDEX_CLIENT_ID,
      clientSecret: YANDEX_CLIENT_SECRET,
      callbackURL: "http://127.0.0.1:3000/auth/yandex/callback",
    },
    function (process.env.APP_TOKEN, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        // To keep the example simple, the user's Yandex profile is returned
        // to represent the logged-in user.  In a typical application, you would
        // want to associate the Yandex account with a user record in your
        // database, and return that user instead.
        logger.info("получили профиль от яндекса" + profile.name)
        return done(null, profile);
      });
    }
  )
);

const options = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.jwtToken,
};

function passportFunction(passport) {
  passport.use();
}

module.exports = passportFunction;
