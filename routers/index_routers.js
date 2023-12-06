const express = require("express");
const router = express.Router();
const register = require("../controllers/register");

router.get("/", (req, res) => {
  res.end("/");
});
router.post("/", function (req, res) {
  res.end("/");
});

router.get("/entries", entries.form);
router.post("/entry", entry.?);

router.get("/register", register.form);
router.post("/register", register.submit);

router.get("/login", login.form);
router.post("/login", login.submit);

router.get("/test", function (req, res) {
  res.end("/test");
});
router.post("/test", function (req, res) {
  console.log("Прошли по пути post/test");
  res.end("post/test");
});

module.exports = router;
