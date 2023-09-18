const express = require("express");
const { createUser } = require("./logic/createUser");
const { getUsers } = require("./logic/getUsers");
const { updateUser } = require("./logic/updateUser");
const { deleteUser } = require("./logic/deleteUser");
const app = express();
const port = 4000;

app.get("/user", (req, res) => {
  getUsers((result) => {
    res.send(result + "");
  });
});
app.post("/user", (req, res) => {
  const { name, age } = req.query;
  createUser(name, age, (result) => {
    res.send(result + "");
  });
});
app.put("/user", (req, res) => {
  const { name, age } = req.query;
  updateUser(name, age, (result) => {
    res.send(result + "");
  });
});
app.delete("/user", (req, res) => {
  const { name } = req.query;
  deleteUser(name, (result) => {
    res.send(result + "");
  });
});

function started() {
  console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);
