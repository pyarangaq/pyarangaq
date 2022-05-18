const os = require("os");

console.log("SO: ", os.platform());
console.log("Release: ", os.release());
console.log("Free Mem: ", os.freemem(), "Bytes");
console.log("Total Mem: ", os.totalmem(), "Bytes");