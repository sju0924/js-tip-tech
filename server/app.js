const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send([{ name: "Thomas Jang" }, { name: "AXBOOT" }, { name: "AXISJ" }]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
