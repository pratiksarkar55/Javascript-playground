//We can use only two primitive types for keys of objects strings and symbols
//Symbol is a primitive type for unique identifiers.

let id = Symbol("id");
let id1 = Symbol("id");
// console.log(id);
console.log(id === id1);

//symbol don't auto convert  to string
//alert(id); //Typeerror:error can't convert to string
//alert(id.toString());

//hidden properties - You can't access symbols in other scripts even if description is same
let person = {
  firstname: "John",
  lastName: "sarkar",
};
person[Symbol("symbolKey")] = "Doe";
console.log(person);
console.log(person["symbolKey"]); //undefined
person[Symbol("symbolKey")] = "Mukherjee"; // new key valu will be created
console.log(person);
let symbolKey = Symbol("symbolKey");
person[symbolKey] = "Doe2"; // new key valu will be created
console.log(person); // undefined

// //skips in for..in and Object.keys
// //object assign copies the whole object with the symbols

// //global symbols
// // read from the global registry
// let globalId = Symbol.for("id"); // if the symbol did not exist, it is created

// // read it again (maybe from another part of the code)
// let idAgain = Symbol.for("id");

// // the same symbol
// console.log(globalId === idAgain); // true
// console.log(Symbol.keyFor(globalId)); //id-only works for global symbol
// console.log(Symbol.keyFor(lastName)); //undefined

// let objid = Symbol("id");
// let objid1 = Symbol("id");
// let user = {
//   [objid]: 123,
//   [objid]: 456,
//   [objid1]: 789,
// };

// let clone = Object.assign({}, user);
// console.log(clone); //symbol 456 & symbol 789

// let objidG = Symbol.for("id");
// let objid1G = Symbol.for("id");
// let userG = {
//   [objidG]: 456,
//   [objid1G]: 789,
// };

// let cloneG = Object.assign({}, userG);
// console.log(cloneG); // symbol 789

// JavaScript’s for...of loop works only on iterables:

// Arrays

// Strings

// Maps

// Sets

// Typed Arrays

// etc.

// These all have an internal [Symbol.iterator] method.

// let obj = {
//   first: "Pratik",
//   last: "Sarkar",
//   [Symbol.iterator]: function* () {
//     yield this.first;
//     yield this.last;
//   },
// };

// let iterable = obj[Symbol.iterator]();

// for (let key in obj) {
//   console.log(key);
// }

// for of is not iterable over objects
// for (let value of obj) {
//   console.log("value ", value);
// }

// const myArray = [1, 2, 3];

// for (const value of myArray) {
//   console.log(value);
// }
