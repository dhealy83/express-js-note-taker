const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express.Router();
let data = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");

app.get("/notes", (req, res) => {
  res.json(data);
});

app.post("/notes", (req, res) => {
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  data.push(newNote);
  fs.writeFile(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(data),
    (err) => {
      if (err) console.log(err);
      res.json(data);
    }
  );
});
app.delete("/notes/:id", (req, res) => {
  const updatedData = data.filter((d) => {
    return d.id !== req.params.id;
  });
  data = updatedData;
  fs.writeFile(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(updatedData),
    (err) => {
      if (err) console.log(err);
      res.json(updatedData);
    }
  );
});

module.exports = app;
