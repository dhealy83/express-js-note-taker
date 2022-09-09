const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(routes);

require("./routes/html-routes");
require("./routes/index");
require("./routes/notes");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
