const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/admin", adminRoutes);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});