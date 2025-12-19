const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// مسار قاعدة البيانات
const dbPath = path.join(__dirname, "database.sqlite");

// إنشاء / فتح قاعدة البيانات
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Database error:", err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

// إنشاء جدول المستخدمين
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT DEFAULT 'user',
    balance REAL DEFAULT 0
  )
`);

module.exports = db;