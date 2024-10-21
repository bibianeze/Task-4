const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: "file.csv",
  header: [
    { id: "fullname", title: "NAME" },
    { id: "position", title: "POSITION"},
    {id: "age", title: "AGE"}
  ],
});

const records = [
  { fullname: "Jennifer Cox", position: "President", age: "40" },
  { fullname: "Robert Smith", position: "Manager", age: "34" },
  { fullname: "Don Brown", position: "Programmer", age: "25" },
  { fullname: "Joel Williams", position: "Accountant", age: "30" },
  { fullname: "Robert White", position: "Clerk", age: "36" },



]


csvWriter
  .writeRecords(records) // returns a promise
  .then(() => {
    console.log("...Done");
  });


