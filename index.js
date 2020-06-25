var fs = require("fs");

function emailExtraction() {
  fs.readFile("emails.txt", function (err, data) {
    let textData = data.toString();
    let counter = 0;

    while (textData.search("@softwire.com") >= 0) {
      const firstInstance = textData.search("@softwire.com");
      counter++;
      textData = textData.slice(firstInstance + 1);
    }
    console.log(counter);
  });
}
emailExtraction();
