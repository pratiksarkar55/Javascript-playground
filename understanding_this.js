"use strict";
// this in global space
//console.log(this); // In browsers, this will log the Window object(both in strict and non-strict mode), in Node.js it will be global

// inside a regular function
function regularFunction() {
  console.log(this); // Window in browsers in non-strict mode; undefined in strict mode
}

//regularFunction(); // In strict mode, this is undefined

// this substitution
// if the value of this is udefined or null, it defaults to the global object(window)  in non-strict mode

//VALUE OF THIS CHANGES BASED ON HOW A FUNCTION IS CALLED

//window.regularFunction(); // this refers to window

// method - function inside an object
// inside an object method

const obj = {
  name: "My Object",
  method: function () {
    console.log(this); // this refers to obj
  },
};

//obj.method();

// call, apply, bind

const person = {
  name: "Pratik",
  display: function (...sex) {
    console.log(sex);
    // array is converted to string with commas when used in template literals
    console.log(`My name is ${this.name} and my sex is ${sex}`);
  },
};

//person.display("male");

const anotherPerson = {
  name: "Saheli",
};

//person.display.call(anotherPerson, "female");
//person.display.apply(anotherPerson, ["female", "test"]);
//const func1 = person.display.bind(anotherPerson, "female", "test");
//func1();

// this inside arrow function

// Arrow functions do not have their own this
// They inherit this from the surrounding/enclosing lexical context
const func1 = () => {
  console.log(this);
};
//func1(); // In global scope, this refers to the global object (Window in browsers) even in strict mode

function outerFunction() {
  const arrowFunc = () => {
    console.log(this);
  };
  arrowFunc();
}

// IT WILL BEHAVE AS IF ARROW FUNCTION IS NOT THERE.ALWAYS CHECK ENCLOSING METHOD/FUNCTION
// SO IT WILL BE UNDEFIEND IN STRICT MODE AND WINDOW IN NON-STRICT MODE
//outerFunction();

const obj2 = {
  name: "Outer Object",
  method: function () {
    const innerObj = {
      name: "Inner Object",
      arrowFunc: () => {
        console.log(this);
      },
      normalFunc: function () {
        console.log(this);
      },
    };
    // this refers to obj2 as if we behave as if arrowFunc is not there the enclosing method has this as obj2
    innerObj.arrowFunc();
    innerObj.normalFunc(); // this refers to innerObj
  },
};

//obj2.method();

// THIS inside DOM
const button = document.createElement("button");
button.textContent = "Click Me to Test this in DOM";
document.body.appendChild(button);
button.addEventListener("click", function () {
  console.log(this); // this refers to the button element
});

// NEED TO TEST THIS IN CLASSES AS WELL

let newObj = {
  name: "pratik",
  test: function () {
    console.log(this.name); // PRATIK
    setTimeout(function () {
      console.log(this); // window/undefined in strict mode/non-strict mode as setTimeout is called on basis of window
    }, 3000);
  },
  testArrow: function () {
    console.log(this.name); // pratik
    setTimeout(() => {
      console.log(this.name); // pratik
    }, 3000);
  },
};

newObj.test();
newObj.testArrow();
