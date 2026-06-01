"use strict";
/*
Objects/arrays are kept in memory as long as they are not garbage collected explicitly.
*/

// let obj = {
//   name: "Pratik",
// }; // object reference stored in obj.
// let arr = [obj]; // reference to object stored in array
// obj = null;
// let arr2 = arr;
// console.log(arr[0]); // this will give "name:Pratik".
// arr = null;
// console.log(arr2[0]); // this will also give "name:Pratik".

// let john = { name: "John" };

// let map = new Map();
// map.set(john, "value");

// console.log(map);

// john = null;

// console.log(map);

// Weak map/Weak set only accepts objects as keys and are explicitly garbage collected when the object is not present
let john1 = {
  name: "John1",
};
let john2 = {
  name: "John2",
};

let map = new WeakMap();
map.set(john1, "value");
map.set(john2, "value1");
john1 = null;
console.log("map value", map); // this will not show instantly as it can be asynchronous
console.log(map.get(john1)); // undefined as it's garbage collected

// weak set
// let johnSet = {
//   name: "John1",
// };
// let johnSet1 = {
//   name: "John2",
// };

// let set = new WeakSet();
// set.add(johnSet);
// set.add(johnSet1);
// johnSet = null;
// console.log("map value", set);
