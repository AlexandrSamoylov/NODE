const express = require("express");
const router = express.Router();

const register = require("../controllers/register");
const login = require("../controllers/login");
const entries = require("../controllers/entries");

router.get("/", entries.list);

router.post("/post", entries.submit);
router.get("/post", entries.form);

router.get("/login", login.form);
router.post("/login", login.submit);

router.delete("/:id", entries.delete);

router.get("/register", register.form);
router.post("/register", register.submit);

router.get("/logout", login.logout);
module.exports = router;
