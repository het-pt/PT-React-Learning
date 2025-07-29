"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Task 2 first phase
*/
var os = require("os");
console.log("Operating System Info");
console.log("Platform:", os.platform());
console.log("Cpu Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
