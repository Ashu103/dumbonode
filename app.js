const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);

/*var readline = require("readline");

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function processSum(number) {
//   // Insert code to do whatever with sum here.
//   console.log("The sum is", number);
// }

// rl.question("Enter a number: ", function (x) {
//   rl.question("Enter another number: ", function (y) {
//     var sum = parseFloat(x) + parseFloat(y);

//     processSum(sum);

//     rl.close();
//   });
// });

const readLine = require("readline");
*/
