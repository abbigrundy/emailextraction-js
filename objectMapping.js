var fs = require("fs");

fs.readFile("emails.txt", function (err, data) {
  let textData = data.toString();
  const emails = textData.match(/@[a-zA-Z\-\.]+/g);
  console.log(emails.length);

  const objectOfEmails = {};

  emails.forEach((domain) => {
    if (objectOfEmails[domain] >= 1) {
      return (objectOfEmails[domain] += 1);
    } else {
      return (objectOfEmails[domain] = 1);
    }
  });
  console.log(objectOfEmails);
});
