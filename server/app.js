const express = require("express");
const cors = require("cors");
const app = express();
const port = 4001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send([
    { name: "Thomas Jang" },
    { name: "AXBOOT" },
    { name: "AXISJ" },
    { name: "경희대학교1" },
    { name: "경희대학교2" },
    { name: "경희대학교3" },
  ]);
});

app.get("/workspaces", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send([
    { name: "workspace 1" },
    { name: "workspace 2" },
    { name: "workspace 3" },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
