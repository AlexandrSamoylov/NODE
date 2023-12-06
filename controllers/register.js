const User = require("../models/user");
const { userInfo } = require("os");

//
exports.form = (req, res) => {
  res.render("registerForm", {});
};

exports.submit = (req, res, next) => {
  User.findByEmail(req.body.dataForm.email, (err, user) => {
    if (!user)
      User.create(req.body.user, (err) => {
        if (err) return next(err);
      });

    res.error("такой пользователь есть в базе");
    res.redirect("/");
  });
};
