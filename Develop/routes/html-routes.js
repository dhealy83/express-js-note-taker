const express = require("express");
const path = require("path");
const app = express.Router();

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

// GET Route for feedback page
app.get(
  "/notes",
  (req, res) => res.sendFile(path.join(__dirname, "../public/notes.html")) // match the file paths
);

module.exports = app;
