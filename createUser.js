const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcryptjs");

const db = new sqlite3.Database("./database.sqlite");

const email = "test@test.com";
const password = "123456";

bcrypt.hash(password, 10, (err, hash) => {
  if (err) return console.log(err);

  db.run(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    [email, hash],
    (err) => {
      if (err) {
        console.log("خطأ:", err.message);
      } else {
        console.log("✅ تم إنشاء مستخدم");
        console.log("📧 Email:", email);
        console.log("🔑 Password:", password);
      }
    }
  );
});