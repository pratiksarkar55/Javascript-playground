// let a = {};
// let user = { name: "Roni" };
// let user2 = { name: "Saheli" };
// // when we use objects as string, objects are automatically converted to string.
// // defaullt toString() of plain js object returns '[object Object]'
//// so '[object Object]' is replaced by 456
// a[user] = 123;
// a[user2] = 456;
// console.log(a[user]);

// var a = 10;
// var a = 20;
// console.log(a); // will give syntax error

// var a = 10;
// b = 20;
// console.log(window);
// console.log(Object.getOwnPropertyDescriptor(window, "a")); // configurable:false
// console.log(Object.getOwnPropertyDescriptor(window, "b")); // configurable:true
// console.log(delete a); //false
// console.log(delete b); // true

// let arr = [2, "1"];
// //sort is place
// console.log(arr.sort()); // ['1',2]
// console.log(arr);
// arr = [2, "1", undefined, null, NaN];
// arr.map((value, index) => console.log(value + ""));
// console.log(arr.sort()); // sort by converting to string and getting the ascii character of first letter or lexographical
// console.log(arr);

//console.log((1, 2, 3)); // 3 also known as comma operator

// for (let i = 0; i < 5; ++i) {
//   console.log(i);
// }
// let i = 0;
// i++; //1
// ++i; // 2
// console.log(i++); // first return then increment.So 2
// console.log(++i); // first increment then return.So 4

// let obj = { name: "roni" };
// let obj1 = { name: "roni" };
// console.log(obj === obj1);
// obj = obj1;
// obj1.age = 30;
// obj1.name = "testing";
// console.log(obj);
// console.log(obj1);
// console.log(obj === obj1);

// let obj1 = {
//   name: "name",
// };

// let value = 20;

// test(obj1, value);

// console.log(obj1); // reference of obj1 is passed
// console.log(value);

// function test(obj, val) {
//   obj.name = "name changed";
//   val = 10;
// }
