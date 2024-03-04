// breaking up function taking multiple arguments into sequence of functions.
//using bind
function multiply(x, y) {
  return x * y;
}

const multiplyByBind = multiply.bind(this, 2);
const output = multiplyByBind.bind(this, 3);
console.log(output()); //6

// //using closures
// function multiplyClosures(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// let ans = multiplyClosures(2);
// console.log(ans(3)); //6
