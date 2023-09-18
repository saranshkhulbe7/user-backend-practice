const fs = require("fs");

function createUser(name, age, callback) {
  if (!name || isNaN(Number(age)) || Number(age) < 0) {
    callback("valid name and age required");
    return;
  }

  fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
      callback("error in reading");
      return;
    }
    let preparedJSONData = [];
    if (data !== "") {
      const contentInJSON = JSON.parse(data);
      if (Array.isArray(contentInJSON)) {
        preparedJSONData = [...contentInJSON];
      } else {
        callback("Existing data corrupted");
        return;
      }
    }
    preparedJSONData = [...preparedJSONData, { name, age }];
    preparedTextData = JSON.stringify(preparedJSONData);
    fs.writeFile("a.txt", preparedTextData, (err) => {
      if (err) {
        callback("error in writing");
        return;
      }
      callback("User created successfully");
      return;
    });
  });
}

exports.createUser = createUser;
