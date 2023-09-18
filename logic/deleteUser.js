const fs = require("fs");

function deleteUser(name, callback) {
  if (!name) {
    callback("valid name required");
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
        let preparedJSONData = contentInJSON.filter(({ name: currName }) => {
          if (name === currName) {
            updateStatus = true;
            return false;
          } else {
            return true;
          }
        });
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
          callback("User deleted successfully");
          return;
        });
      } else {
        callback("Existing data corrupted");
        return;
      }
    }
  });
}

exports.deleteUser = deleteUser;
