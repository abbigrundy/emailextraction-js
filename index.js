var fs = require("fs");

function emailExtraction() {
  fs.readFile("emails.txt", function (err, buf) {
    console.log(buf.toString());
  });
}

emailExtraction();
