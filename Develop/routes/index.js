const express = require("express");

// Import our modular routers for /tips and /feedback
const notesRoutes = require("./notes");
const htmlRoutes = require("./html-routes");

const app = express.Router();

app.use("/api", notesRoutes); //Will access local api routes
app.use("/", htmlRoutes);

module.exports = app;
