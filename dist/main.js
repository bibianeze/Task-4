"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// Read and parse the CSV file
const matches = fs_1.default
    .readFileSync("worldCup.csv", {
    encoding: "utf-8",
})
    .split("\n")
    .map((row) => {
    return row.split(",");
});
console.log(matches);
