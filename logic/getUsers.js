const fs = require("fs");

function getUsers(callback) {
  fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
      return "error in reading";
    }
    console.log("data", data);
    callback(data);
  });
}

exports.getUsers = getUsers;
