//We can use only two primitive types for keys of objects strings and symbols
//Symbol is a primitive type for unique identifiers.

// let id = Symbol("id");
// let id1 = Symbol("id");
// console.log(id);
// console.log(id === id1);

//symbol don't auto convert  to string
//alert(id); //Typeerror:error can't convert to string
//alert(id.toString());

//hidden properties - You can't access symbols in other scripts even if description is same
// let person = {
//   firstname: "John",
//   lastName: "sarkar",
// };
// console.log(person);
// person[Symbol("symbolKey")] = "Doe";
// console.log(person["symbolKey"]); //undefined
// let symbolKey = Symbol("symbolKey");
// person[symbolKey] = "Doe2";
// console.log(person.symbolKey); // undefined

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

let obj = {
  first: "Pratik",
  last: "Sarkar",
};

for (let key in obj) {
  console.log(key);
}
// for of is not iterable over objects
for (let value of Object.values(obj)) {
  console.log("value ", value);
}
