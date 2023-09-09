// let obj = {
//   firstname: "John",
// };
// let obj2 = {
//   lastName: "Doe",
// };
// console.log(obj.__proto__); //Object.prototype

// obj2.__proto__ = obj;
// console.log(obj2);
// console.log(obj2.firstname); // Prototypal Inheritance

// let dummyObj = {
//   name: "John",
// };
// function car(name) {
//   this.name = name;
// }
// console.log(car.prototype);
// let newCar = new car("Roni");
// console.log("newCar", newCar);
// console.log(newCar.constructor === car); //true
// car.prototype.lastName = "LastName";
// let newCarWithLastName = new car("Roni");
// console.log("newCarWithLastName", newCarWithLastName);
// console.log(newCarWithLastName.constructor === car); //true
// car.prototype = dummyObj;
// let changedCar = new car("Sarkar");
// console.log("changedCar", changedCar); //false
// console.log(changedCar.constructor === car); //false

// let arrayObj = {
//   name: "array",
// };
// let arr = [];
// Array.prototype = arrayObj; // can't directly change Array.prototype
// let arr2 = [];
// console.log(arr.name); //undefined
// Array.prototype.test = arrayObj;
// let arr3 = [];
// // test will be present in all Prototypes of arr , arr2 and arr3
// console.log(arr);
// console.log(arr2);
// console.log(arr3);
// arr2.__proto__ = arrayObj;
// console.log(arr2.name);

// -------------------------TYPES OF INHERITANCE IN JS-------------------------------------------------
//---------------protypal inheritance----------------
// function Parent() {
//   this.name = "parent";
// }
// function Child() {}
// function Child1() {}
// function Child2() {}
// function Child3() {}
// Parent.prototype.sayHello = function () {
//   console.log(this.name);
// };
// Child1.prototype = Object.create(Parent.prototype);
// Child2.prototype = Object.create(new Parent());
// Child3.prototype = new Parent();

// let c = new Child();
// let c1 = new Child1();
// let c2 = new Child2();
// let c3 = new Child3();
// console.log("child", c);
// console.log("child1 ", c1);
// console.log("child2 ", c2);
// console.log("child3 ", c3);
// //c.sayHello(); //error
// c1.sayHello();
// c2.sayHello();
// c3.sayHello();

//constructor inheritance
// function Parent(name) {
//   this.name = name;
// }

// function Child(firstname, lastName) {
//   this.lastName = lastName;
//   Parent.call(this, firstname);
// }

// let childObj = new Child("Pratik", "Sarkar");
// console.log(childObj);

//----------------class inheritance--------------------

// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHello() {
//     console.log(`Hello from ${this.name}`);
//   }
// }

// class Child extends Parent {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
// }

// const childObj = new Child("Alice", 7);
// console.log(childObj);

// converting this to plain vanilla js

Function.prototype.mycall = function (...args) {
  let instance = args[0];
  let rest = args.slice(1);
  let obj = new this();
  console.log(obj);
  let index = 0;
  for (let key of Object.keys(obj)) {
    instance[key] = rest[index];
    obj[key] = rest[index];
    index++;
  }
  console.log(obj);
};

function Parent(name, dob) {
  this.name = name;
  this.dob = dob;
}

function Child(name, age, dob) {
  Parent.mycall(this, name, dob);
  this.age = age;
}

Parent.prototype.sayHello = function () {
  console.log(
    `My name is ${this.name} , my dob is ${this.dob} and my age is ${this.age}`
  );
};
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
let child = new Child("Alice", 7, "02-07-1993");
console.log(child);
child.sayHello();

// //Important
// let test = Object.create({ hello: "hello" });
// console.log(test);

// ---------------------mixins------

// function canCry() {
//   console.log("Crying...");
// }

// class Child {
//   constructor() {
//     this.canCry = canCry;
//   }
// }

// let child = new Child();
// console.log(child);
// child.canCry();

// let crying = {
//   canCry2: function () {
//     console.log("Crying 2...");
//   },
// };
// class Child2 {
//   constructor() {
//     Object.assign(this, crying);
//   }
// }

// let child2 = new Child2();
// console.log(child2);
// child2.canCry2();
