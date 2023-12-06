const { nextTick } = require("process");
const sqlite = require("sqlite3").verbose();
const db = new sqlite3.Database("test.db");

const sql =
  "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL, age INTEGER NOT NULL)";

db.run(sql);

class User {
  constructor() {}

  static async create(dataForm, cb) {
    try {
      const salt = await bcrypt.genSalt(10);

      const hash = await bcrypt.hash(dataForm.password, salt);
      const sql1 =
        "INSERT INTO users(name, email, password, age) Values(?, ?, ?, ?)";
      db.run(
        sql1,
        dataForm.name,
        dataForm.email,
        dataForm.password,
        dataForm.age,
        cb
      );
    } catch (err) {
      if (err) return next(err);
    }
  }

  static findByEmail(email, cb) {
    db.get("SELECT * FROM users WHERE email = ?", email, cb);
  }

  static authenticate(email, password, cb) {
    User.findByEmail(dataForm.email, (err, user) => {
      if (err) return cb(err);
      if (!user) return cb();
    });
    const result = bcrypt.compare(dataForm.password, user.password);
    if (result) return user; // TODO: check
  }
}
