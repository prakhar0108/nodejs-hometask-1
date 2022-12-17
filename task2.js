const csvFilePath = "./csv/file.csv";
const csv = require("csvtojson");
const fs = require("fs");

//Read the content of csv file from./csv directory
fs.readFile(csvFilePath, "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

//Using csvtojson package to convert csv file into json object

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);
  });

// Write the csv file content to a new txt file
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    fs.writeFile("test.txt", JSON.stringify(jsonObj, null, 2), (error) => {
      if (error) {
        console.log("An error has occurred ", error);
        return;
      }
      console.log("Data written successfully to disk");
    });
  });
