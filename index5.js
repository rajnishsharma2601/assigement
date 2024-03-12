const fs = require("fs");

fs.unlink("./raj.txt", () =>
  console.log("File Deleted SuccessFully")
);