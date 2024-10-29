import csv from "csv-parser";
import fs from "fs";

// Read and parse the CSV file
const matches: string[][] = fs
  .readFileSync("worldCup.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

console.log(matches);
