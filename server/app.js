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
    { name: "지언이" },
    { name: "아오야기 토우야" },
    { name: "시노노메 아키토" },
  ]);
});

app.get("/workspaces", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send([
    { name: "스트리트의 세카이" },
    { name: "카미야마 고교" },
    { name: "WEEKEND GARAGE" },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
