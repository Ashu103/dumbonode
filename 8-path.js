const path = require("path");

console.log(path.sep);

const filepath = path.join("/content", "subfolder", "text.txt");

const base = path.basename(filepath);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

console.log(filepath);

console.log(base);
