const path = require("path");
const fs = require("fs");

// fs.mkdir(path.join(__dirname, "tmp"), function (err) {
//   if (err) {
//     {
//       console.log(err);
//     }
//     console.log("папка создана");
//   }
// });

const filepath = path.join(__dirname, "tmp", "2.txt");
console.log(filepath);
fs.writeFile(filepath, "segewrgherherth", function (err) {
  if (err) {
    console.log(err);
  }
  console.log("папка создана");
});

fs.readFile(filepath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
