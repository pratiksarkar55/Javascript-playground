// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   // this is not memory efficient as it creates a new method for each instance
//   this.displayInfoMethod = function () {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   };
// }

// both person1 and person2 instances share reference to the same prototype
// const person1 = new Person("Alice", 30);
// const person2 = new Person("Pratik", 32);
// console.log(person1);
// console.log(person2);

// Person.prototype.displayInfoArr = () => {
//   console.log(`Name: ${this.name}, Age: ${this.age}`);
// };

// // This is memory efficient as it shares the method across all instances
// Person.prototype.displayInfo = function () {
//   console.log(`Name: ${this.name}, Age: ${this.age}`);
// };
// person1.displayInfo();
// person1.displayInfoArr();

// console.log(Object.hasOwn(person1, "displayInfoMethod")); // true
// console.log(Object.hasOwn(person1, "displayInfo")); // false as it's inherited from prototype
// console.log(Person.prototype.displayInfo === person1.__proto__.displayInfo); // true
//console.log(Person.prototype);

// const person3 = new person1.constructor("Bob", 25);
// console.log(person3);

// ----------------------- Examples of Prototype Inheritance -----------------------

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   // this is not memory efficient as it creates a new method for each instance
//   this.personInEfficient = function () {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   };
// }

// Person.prototype.personEfficient = function () {
//   console.log(`Method in Person Name: ${this.name}, Age: ${this.age}`);
// };

// function Player(name, age, game) {
//   // console.log(this);
//   Person.call(this, name, age); // Inherit properties from Person
//   this.game = game;
// }

// Player.prototype = Object.create(Person.prototype); // Inherit methods from Person.eplaces the prototype of Player with Person's prototype

// Player.prototype.displayInfoArrow = () => {
//   console.log(`Name: ${this.name}, Age: ${this.age}, Game: ${this.game}`); // this will be undefined
// };

// Player.prototype.PlayerEfficient = function () {
//   console.log(
//     `Method in player Name: ${this.name}, Age: ${this.age}, Game: ${this.game}`
//   );
// };

// // creates a new object with the specified prototype object or null
// //console.log(Object.create(Person.prototype));
// // Set up inheritance.
// //Object.setPrototypeOf(Player.prototype, Person.prototype);

// //Object.setPrototypeOf(Player.prototype, Person.prototype); // Mutates Player.prototype to inherit from Person.prototype
// Player.prototype.constructor = Player; // Correct the constructor pointer
// const person = new Person("Generic Person", 40);
// const player1 = new Player("Charlie", 28, "Football");
// console.log(Player.prototype.constructor === Player);
// console.log(player1);
// player1.personEfficient();
// player1.PlayerEfficient();

// ----------------------------------------Inheritance using object literals---------------------------------------------------

const person = {
  displayInfo: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },
};
console.log(person); // null
const employee = Object.create(person);
console.log(employee);
employee.name = "David";
employee.age = 35;
employee.displayInfo();
console.log(Object.getPrototypeOf(employee));
console.log(Object.getPrototypeOf(person));
console.log(employee.__proto__ === person);
