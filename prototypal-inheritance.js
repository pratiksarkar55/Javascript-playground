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

//__proto__ is used to access or set the prototype of an individual object, while prototype is used in the context of constructor functions to define properties and methods that will be shared by instances created with that constructor.

// -------------------------TYPES OF INHERITANCE IN JS-------------------------------------------------
//---------------protypal inheritance----------------
/*
In prototypal inheritance, objects inherit directly from other objects. 
Each object has a prototype, and it inherits properties 
and methods from that prototype.
*/

let parentObject = {
  displayName:function(){
    console.log("Name is " + this.name);
  }
}

let child = Object.create(parentObject);
console.log(child);
child.name = "roni"
child.displayName();



// Constructor based inheritance(pseudo-class inheritance)
// function Parent(name, dob) {
//   this.name = name;
//   this.dob = dob;
// }

// function Child(name,age,dob) {
//   this.age = age;
//   Parent.call(this,name,dob);
//   this.getDetails=function(){
//     console.log("My name is " + this.name + " and age is " + this.age + "and dob is " + this.dob);
//   }
   
//   // this won't be accessible outside Child due to scoping
//   function localFunction(){}
// }
// Child.prototype = Object.create(Parent.prototype);
// console.log(new Child("Pratik",30,"1993"));


//----------------classical inheritance--------------------

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









// Child.prototype.constructor = Child;
// let child = new Child("Alice", 7, "02-07-1993");
// console.log(child);
// child.sayHello();

// //Important
// let test = Object.create({ hello: "hello" });
// console.log(test);

// ---------------------mixins------
//are a way to enhance the functionality of a class or an object by combining (or mixing in) methods and properties from other objects.
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
