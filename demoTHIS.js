//"use strict";
// global context
console.log(this); // refers to window object.Should be undefined for strict mode.Need to check why not working?

//function context with normal function
// for normal function this refers to the object that called the function.
let obj1 = {
  name: "Roni",
  getName: function () {
    console.log(this.name);
  },
};
obj1.getName(); // Roni

let obj2 = {
  name: "Roni",
  getName: function () {
    function test() {
      console.log("hiyaa", this); //window/undefined in strict mode
    }
    test();
  },
};
obj2.getName(); // Error as test is not defined on any object so it refers to window/undefined in strict mode.

let obj3 = {
  name: "Roni",
  getName: function () {
    function test() {
      console.log(this.name);
    }
    test.bind(this)(); //Roni
  },
};
obj3.getName();

//Arrow functions
//Refers to this where the function is defined.
let objArrow1 = {
  name: "Roni",
  getName: () => {
    console.log("objArrow1", this); // window/undefined in strict mode
  },
};
objArrow1.getName();

let objArrow2 = {
  name: "Roni",
  getName: function () {
    const test = () => {
      console.log(this.name); //"Roni"
    };
    test();
  },
};
objArrow2.getName();

let objArrow3 = function () {
  console.log("inside function 1", this);
  const getName = () => {
    console.log("inside function 2", this);
    const test = () => {
      console.log("inside function 3", this.name); //"Text"
    };
    test();
  };
  getName();
};
objArrow3.bind({ name: "Text" })();

let objArrow4 = function () {
  console.log("inside function4 1", this);
  this.getName = function () {
    console.log("inside function4 2", this);
    const test = () => {
      console.log("inside function4 3", this.name); //"Text"
    };
    test();
  };
  this.getName();
};
objArrow4.bind({ name: "Text", getName: () => {} })();

let objArrow5 = function () {
  console.log("inside function5 1", this);
  const getName = function () {
    console.log("inside function5 2", this.name); //window/udefined for strict
    const test = () => {
      console.log("inside function5 3", this.name); //window/udefined for strict
    };
    test();
  };
  getName();
};
objArrow5.bind({ name: "Text" })();

// event handlers
// "this" refers to the button element for noraml function.Window for arrow function.
document.getElementById("myButton").addEventListener("click", function () {
  console.log(this);
});

// constructor functions
// Can't use arrow functions as constuctors.Will give errors.
function Person(name) {
  this.name = name;
}

const john = new Person("John");
console.log(john.name);
