//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr);
// console.log(arr.shift()); // remove first element from original array and return the first element.
// console.log(arr.unshift(5, 10)); // insert the element into the first place of the original array and return the new length.
// console.log(arr);

// let arr2 = [10];
// console.log(arr2);
// console.log(arr2.concat(arr)); // concats the array and returns new array without modifying the existing array.

//console.log(arr.slice(0, 4)); //returns a copy of the array.[1,2,3,4]. Last index is not included. Original array is not modified.
//console.log(arr.slice(0, -2)); // [1,2,3,4,5,6,7] Last two elements are excluded. Original array is not modified.
//console.log(arr.slice(-9, -1)); // [1,2,3,4,5,6,7,8] excludes the last element. Original array is not modified.
//console.log(arr.slice(-9, 2)); // [1,2]
//console.log(arr.splice(0, 2, 100, 101, 102, 103, 104)); // delete two elements from 0 index and return the deleted elements.Add numbers to it's places all in the original array.
//console.log(arr.splice(-1, 1)); // deletes last element and returns the deleted element. Modifies original array.
//console.log(arr); //modified original array
// // console.log(
// //   arr.reduce((prevValue, currentValue, currentIndex, arr) => {
// //     return prevValue + currentValue;
// //   }, 0)
// // );

// console.log(arr[-1]); //undefined

// let testarr = [];
// testarr.length = 10;
// console.log(testarr); // creates an array of length 10 with all elements as empty slots.
// testarr[5] = 10;
// console.log(testarr);

// let testArr2 = [1, 2, 3, 4, 5];
// testArr2.length = 1;
// console.log(testArr2);
// console.log(testArr2[2]); // undefined

// // use reduce to write map function

// function modifiedmap(callback) {
//   return this.reduce((prev, curr, index) => {
//     prev.push(callback(curr, index));
//     return prev;
//   }, []);
// }

// Array.prototype.modifiedmap = function (callback) {
//   return modifiedmap.call(this, callback);
// };

// const arr2 = arr.modifiedmap((obj, index) => {
//   return obj * 2;
// });

// console.log(arr2);

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
    console.log(`Hi, I'm ${this.name}`); // Would work as expected as if we remove arrow function here this refers to the instance of the class.As MyClass1 is just a syntactic sugar over function constructor.
  };

  // Static method using arrow function (appropriate use)
  static welcome = () => {
    console.log("Welcome to the class!", this.name);
  };
}

MyClass1.welcome();
let myclass = new MyClass1();
myclass.sayHi();
myclass.greet();
