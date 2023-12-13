const express = require("express");
const router = express.Router();

const register = require("../controllers/register");
const entries = require("../controllers/entries");
const login = require("../controllers/login");

router.get("/", entries.list);
// router.post("/entry", entries.form);
// router.post("/post", entries.post);

router.get("/register", register.form);
router.post("/register", register.submit);

router.get("/login", login.form);
router.post("/login", login.submit);

router.get("/logout", login.lagout);

module.exports = router;
