"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
fs.writeFileSync("myfile.txt", "Hello from Node.js!");
var content = fs.readFileSync("myfile.txt", "utf-8");
console.log("File Content:", content);
fs.appendFileSync("myfile.txt", "\nThis is appended content.");
fs.unlinkSync("myfile.txt");
