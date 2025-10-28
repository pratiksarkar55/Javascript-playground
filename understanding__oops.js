class Person {
  #personSex = "male"; // Encapsulated private field
  constructor(name, age) {
    // console.log(this.constructor === Person);
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    this.#personSex = "Not Specified";
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Sex: ${this.#personSex}`
    );
  }

  displayInfoArrow = () => {
    this.#personSex = "Not Specified";
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Sex: ${this.#personSex}`
    );
  };
}
const person1 = new Person("Alice", 30);
console.log(person1);
// console.log(person1.name); // Accessing public property
// person1.displayInfo();
// person1.displayInfoArrow();

// Classical Inheritance Example
class Player extends Person {
  constructor(name, age, game) {
    super(name, age);
    this.game = game;
  }

  // Overriding method - Polymorphism
  displayInfo() {
    console.log(`Game: ${this.game}`);
  }
}

const player1 = new Player("Bob", 25, "Chess");
console.log(player1);
//player1.displayInfo();
// player1.displayInfoArrow();

// ----------------------- Examples of Abstraction -----------------------

class Animal {
  constructor() {
    console.log(this);
    // Check if the current class (this.constructor) is the abstract class (Animal)
    if (this.constructor === Animal) {
      throw new TypeError(
        "Abstract class 'Animal' cannot be instantiated directly."
      );
    }
  }

  // Define an abstract method that must be implemented by subclasses
  makeSound() {
    throw new Error("Method 'makeSound()' must be implemented.");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(); // Must call super() first!
    this.name = name;
  }

  makeSound() {
    return `${this.name} barks!`;
  }
}

// Example:
// const genericAnimal = new Animal(); // ❌ Throws TypeError
//const myDog = new Dog("Buddy"); // ✅ Works
//console.log(myDog.makeSound()); // Output: Buddy barks!
