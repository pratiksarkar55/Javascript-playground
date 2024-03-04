// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr);
// //console.log(arr.shift()); // remove first element from original array and return the first element.
// //console.log(arr.unshift(5)); // insert the element into the first place of the original array and return the new length.

// // let arr2 = [10];
// // console.log(arr2);
// // console.log(arr2.concat(arr)); // concats the array and returns new array without modifying the existing array.

// //console.log(arr.slice(0, 4)); //returns a copy of the array.[1,2,3,4]
// console.log(arr.splice(0, 2, 100, 101, 102, 103, 104)); // delete two elements from 0 index and return the deleted elements.Add numbers to it's places all in the priginal array.

// // console.log(
// //   arr.reduce((prevValue, currentValue, currentIndex, arr) => {
// //     return prevValue + currentValue;
// //   }, 0)
// // );

// // use reduce to write map function

// // With call method
// function customMap(callback, index, arr) {
//   return this.reduce((prev, curr, index, arr) => {
//     prev.push(callback(curr, index, arr));
//     return prev;
//   }, []);
// }
// Array.prototype.customMap = function (callback) {
//   return customMap.call(this, callback);
// };

// console.log(
//   arr.customMap((obj) => {
//     return obj * 2;
//   })
// );

// // Without call method
// function customMap(callback) {
//   // console.log("this", this);
//   return this.reduce((prev, curr, index, arr) => {
//     prev.push(callback(curr, index, arr));
//     return prev;
//   }, []);
// }

// Array.prototype.customMap = customMap;

// // Example usage
// const result = arr.customMap((value, index, array) => {
//   return value * 2;
// });

// console.log(result); // Output: [2, 4, 6]
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function myfunction() {
//   console.log("inside my function");
// }
// Array.prototype.myfunction = myfunction;
// console.log(arr.myfunction());

class MyClass1 {
  constructor() {
    this.name = "Bard";
  }

  // Regular method with expected `this` behavior
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  // Arrow method (potentially problematic `this`)
  sayHi = () => {
    console.log(`Hi, I'm ${this.name}`); // Might not work as intended
  };

  // Static method using arrow function (appropriate use)
  static welcome = () => {
    console.log("Welcome to the class!", this.name);
  };
}

MyClass1.welcome();
let myclass = new MyClass1();
myclass.sayHi();
