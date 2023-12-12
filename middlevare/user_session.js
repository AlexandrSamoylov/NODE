const { request } = require("express");
const User = require("../models/User");

module.exports = function (req, res, next) {
  if (req.session.userEmail) {
    User.findByEmail(req.session.userEmail, (err, userData) => {
      if (err) return next(err);
      if (userData) req.user = res.locals.user = userData;
    });
  }
};
//rgerherh
er;
