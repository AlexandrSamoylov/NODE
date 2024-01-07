const Entry = require("../models/entry");

exports.list = (req, res, next) => {
  Entry.selectAll((err, entries) => {
    if (err) return next(err);
    const userData = req.user;
    res.render("entries", { title: "List", entries: entries, user: userData });
  });
};

exports.form = (req, res) => {
  res.render("post", { title: "Post" });
};

exports.submit = (req, res, next) => {
  try {
    const username = req.user ? req.user.name : null;
    const data = req.body.entry;

    const entry = {
      username: username,
      title: data.title,
      content: data.content,
    };
    Entry.create(entry);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
};

exports.delete = (req, res, next) => {
  const entryId = req.params.id;

  Entry.delete(entryId, (err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

exports.updateForm = (req, res) => {
  const entryId = req.params.id;
  Entry.getEntryById(entryId, (err, entry) => {
    if (err) {
      return res.redirect("/posts");
    }
    res.render("update", { title: "Update", entry: entry });
  });
};

exports.updateSubmit = (req, res, next) => {
  const entryId = req.params.id;
  const newData = {
    title: req.body.entry.title,
    content: req.body.entry.content,
  };

  Entry.update(entryId, newData, (err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};