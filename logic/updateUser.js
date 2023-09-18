const fs = require("fs");

function updateUser(name, age, callback) {
  if (!name || isNaN(Number(age)) || Number(age) < 0) {
    callback("valid name and age required");
    return;
  }

  fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
      callback("error in reading");
      return;
    }
    if (data !== "") {
      const contentInJSON = JSON.parse(data);
      if (Array.isArray(contentInJSON)) {
        let updateStatus = false;
        let preparedJSONData = contentInJSON.map(
          ({ name: currName, age: currAge }) => {
            if (name === currName) {
              updateStatus = true;
              return { name, age };
            } else {
              return { name: currName, age: currAge };
            }
          }
        );
        if (!updateStatus) {
          callback("User not found");
          return;
        }
        preparedTextData = JSON.stringify(preparedJSONData);
        fs.writeFile("a.txt", preparedTextData, (err) => {
          if (err) {
            callback("error in writing");
            return;
          }
          callback("User updated successfully");
          return;
        });
      } else {
        callback("Existing data corrupted");
        return;
      }
    }
  });
}

exports.updateUser = updateUser;
