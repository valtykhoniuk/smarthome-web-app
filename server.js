const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const DATA_PATH = "./data/state.json";

// GET – повертає стан
app.get("/api/state", (req, res) => {
  const data = fs.readFileSync(DATA_PATH);
  res.json(JSON.parse(data));
});

// POST – оновлює стан
app.post("/api/state", (req, res) => {
  fs.writeFileSync(DATA_PATH, JSON.stringify(req.body, null, 2));
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`SmartHome Server running on http://localhost:${PORT}`);
});
