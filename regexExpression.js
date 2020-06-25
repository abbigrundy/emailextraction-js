var fs = require("fs");

fs.readFile("emails.txt", function (err, data) {
  let textData = data.toString();
  const emails = textData.match(/@softwire.com/g);
  console.log(emails.length);
});
