console.log("Hello world from ts");

//merging
// interface Person {
//   name: string;
// }

// interface Person {
//   age: number;
// }

// type MergedType = Person;

// let obj: MergedType = {
//   name: "Pratik",
//   age: 23,
// };

// extends
// interface PersonExtended extends Person {
//   phone: string;
// }

// let obj2: PersonExtended = {
//   name: "Pratik",
//   age: 23,
//   phone: "",
// };

// only Interface are applicalble in objects

// types are applicable for objects,primitive types,tuples

// types allow union and intersection

//types doesn't allow merging
// type A = { name: string };

// type B = { age: number };

// type C = A | B; // union

// type D = A & B; // intersection

// let obj3: D = {
//   name: "",
//   age: 23,
// };

//-----------------------Utility types----------------
// interface Person {
//   name: string;
//   age: number;
//   phone: String;
// }

// let obj1: Partial<Person> = {
//   name: "",
// };

// let obj2: Required<Person> = {
//   name: "",
//   age: 2,
//   phone: "",
// };

// let obj3: Readonly<Person> = {
//   name: "",
//   age: 2,
//   phone: "",
// };

// obj3.age = 10;

//--------------------------Mapped types----------------------------

interface Person {
  name: string;
  age: number;
  phone: String;
}

type Optional<T extends Person> = {
  [k in keyof T]?: T[k];
};

type newType = Optional<Person>;

type keys = keyof Person;
