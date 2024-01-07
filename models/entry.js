const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("test.db");

const sql =
  "CREATE TABLE IF NOT EXISTS entries (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, title TEXT, content TEXT NOT NULL)";
db.run(sql);

class Entry {
  constructor() {}

  static create(data) {
    const sql =
      "INSERT INTO entries (username, title, content) VALUES (?, ?, ?)";
    db.run(sql, data.username, data.title, data.content);
  }

  static selectAll(cb) {
    db.all("SELECT * FROM entries", cb);
  }

  static delete(id, cb) {
    const sql = "DELETE FROM entries WHERE id = ?";
    db.run(sql, id, err=> {
    if (err) return cb(err);
    });
  }

  static getEntryById(entryId, cb) {
    const sql = "SELECT * FROM entries WHERE id = ?";
    db.get(sql, entryId, cb);
  }
  static update(entryId, newData, cb) {
    const sql = "UPDATE entries SET title =?, content =? WHERE id =?";
    db.run(sql, newData.title, newData.content, entryId, err => {
      if (err) {
        return cb(err);
      } else {
        cb(null);
      }
    });
  }
}

module.exports = Entry;
