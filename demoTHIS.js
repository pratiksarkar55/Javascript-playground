// "use strict";
// global context
//console.log(this); // refers to window object.Should be undefined for strict mode.Need to check why not working?

//function context with normal function
// for normal function this refers to the object that called the function.
// let obj1 = {
//   name: "Roni",
//   getName: function () {
//     console.log(this.name);
//   },
// };
// obj1.getName(); // Roni

// let obj2 = {
//   name: "Roni",
//   getName: function () {
//     function test() {
//       console.log("hiyaa", this); //window/undefined in strict mode
//     }
//     test();
//   },
// };
// obj2.getName(); //  window/undefined in strict mode.

// let obj3 = {
//   name: "Roni",
//   getName: function () {
//     function test() {
//       console.log(this.name);
//     }
//     test.bind(this)(); //Roni
//   },
// };
// obj3.getName();

//Arrow functions
//Refers to this where the function is defined.
//Arrow functions in JavaScript do not have their own this context; instead, they inherit the this value from their enclosing lexical context.
// let objArrow1 = {
//   name: "Roni",
//   getName: () => {
//     console.log("objArrow1", this); // window/undefined in strict mode
//   },
// };
// objArrow1.getName();

// let objArrow2 = {
//   name: "Roni",
//   getName: function () {
//     const test = () => {
//       console.log(this.name); //"Roni"
//     };
//     test();
//   },
// };
// objArrow2.getName();

// let objArrow3 = function () {
//   console.log("inside function 1", this);
//   const getName = () => {
//     console.log("inside function 2", this);
//     const test = () => {
//       console.log("inside function 3", this.name); //"Text"
//     };
//     test();
//   };
//   getName();
// };
// objArrow3.bind({ name: "Text" })();

// let objArrow3 = {
//   name: "Text",
//   getName: () => {
//     console.log("inside function 1", this);
//     const test = () => {
//       console.log("inside function 2", this.name); //undefined
//     };
//     test();
//   },
// };
// objArrow3.getName();

// let objArrow4 = function () {
//   console.log("inside function4 1", this);
//   this.getName = function () {
//     console.log("inside function4 2", this);
//     const test = () => {
//       console.log("inside function4 3", this.name); //"Text"
//     };
//     test();
//   };
//   this.getName();
// };
// objArrow4.bind({ name: "Text", getName: () => {} })();

// let objArrow5 = function () {
//   console.log("inside function5 1", this);
//   const getName = function () {
//     console.log("inside function5 2", this); //window/udefined for strict
//     const test = () => {
//       console.log("inside function5 3", this); //window/udefined for strict
//     };
//     test();
//   };
//   getName();
//   //  this.getName(); // this.getName() is not a function.
// };
// objArrow5.bind({ name: "Text" })();

// // event handlers
// // "this" refers to the button element for noraml function.Window for arrow function.
// document.getElementById("myButton").addEventListener("click", function () {
//   console.log(this);
// });

// // constructor functions
// // Can't use arrow functions as constuctors.Will give errors.
// function Person(name) {
//   this.name = name;
// }

// const john = new Person("John");
// console.log(john.name);
// /**Arrow functions in JavaScript do not have their own this context; instead, they inherit the this value from their enclosing lexical context.
//  * In this case, the arrow function inside displayName captures the this value from the surrounding lexical context, which is the window object. */
// //when you define an object method using an arrow function, it doesn't bind this to the object itself as regular function methods do
// function test() {
//   this.name = "John";
//   let objTimeOut = {
//     name: "Pratik",
//     displayName: () => {
//       setTimeout(() => {
//         console.log("Name inside setTimeout", this.name); // John
//       }, 200);
//     },
//   };
//   objTimeOut.displayName();
// }
// test();

// let objTimeOut = {
//   name: "Pratik",
//   displayName: () => {
//     setTimeout(() => {
//       console.log("Name inside setTimeout", this.name); // undefiend
//     }, 200);
//   },
// };
// objTimeOut.displayName();

// let obj = {
//   name: "test",

//   displayName: function () {
//     let testDisplay = () => {
//       console.log("iniside test Display", this.name); //test
//       setTimeout(() => {
//         console.log("iniside setTimeout", this.name); //test
//       });
//       new Promise((resolve, reject) => {
//         console.log("iniside promise", this.name); //test
//         resolve();
//       });
//       document.getElementById("myButton").addEventListener("click", () => {
//         console.log(this.name); //test
//       });
//     };
//     testDisplay();
//   },
// };
// obj.displayName();

let newObj = {
  name: "pratik",
  test: function () {
    console.log(this.name); //pratik
    setTimeout(function () {
      console.log(this.name); //undefiend
    }, 3000);
  },
  testArrow: function () {
    console.log(this.name); // pratik
    setTimeout(() => {
      console.log(this.name); //pratik
    }, 3000);
  },
};

newObj.test();
newObj.testArrow();
