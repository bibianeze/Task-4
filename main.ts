import { createObjectCsvWriter } from "csv-writer";

interface Record {
  fullname: string;
  position: string;
  age: string;
}

const csvWriter = createObjectCsvWriter({
  path: "file.csv",
  header: [
    { id: "fullname", title: "NAME" },
    { id: "position", title: "POSITION" },
    { id: "age", title: "AGE" },
  ],
});

const records: Record[] = [
  { fullname: "Jennifer Cox", position: "President", age: "40" },
  { fullname: "Robert Smith", position: "Manager", age: "34" },
  { fullname: "Don Brown", position: "Programmer", age: "25" },
  { fullname: "Joel Williams", position: "Accountant", age: "30" },
  { fullname: "Robert White", position: "Clerk", age: "36" },
];

csvWriter
  .writeRecords(records)
  .then(() => {
    console.log("...Done");
  })
  .catch((error) => {
    console.error("Error writing CSV:", error);
  });
