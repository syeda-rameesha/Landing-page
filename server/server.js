const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

// Allow frontend to send JSON
app.use(cors());
app.use(express.json());

// Where we'll save the messages
const DATA_FILE = path.join(__dirname, "contacts.json");

// Make sure contacts.json exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, "[]", "utf8");
}

// Handle contact form submission
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Read existing contacts
  const fileText = fs.readFileSync(DATA_FILE, "utf8");
  let contacts;
  try {
    contacts = JSON.parse(fileText);
  } catch (err) {
    contacts = [];
  }

  // Add new entry
  const newEntry = {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };

  contacts.push(newEntry);

  // Save back to file
  fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2), "utf8");

  console.log("✅ Saved contact:", newEntry);
  res.json({ success: true });
});

// Start backend
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});