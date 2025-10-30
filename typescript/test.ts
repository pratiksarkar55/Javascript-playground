console.log("test hello world");
// d.ts files  Add type checking to plain JavaScript libraries or files.
export type Test = string;

export class Person<T> {
  private name: T;
  constructor(name: T) {
    this.name = name;
  }
  display() {
    console.log("My name is", this.name);
  }
}

// difference between interface and type

// Typescript merges interfaces with same name
interface User {
  name: string;
}
interface User {
  age: number;
}
const u: User = { id: 1, name: "Pratik", age: 25 }; // ✅ merged

interface PlayerI {
  name: string;
  age: number;
}

interface ProfessionI extends PlayerI {
  profession: string;
}

type PlayerType = {
  name: string;
  age: number;
};

// intersection
type ProfessionType = PlayerType & {
  sex: String;
};

// union
type tupleType = [string, number, string] | ProfessionType;

const testTuple: tupleType = ["", 1, ""];

export type intersectionType = PlayerI & ProfessionType;

// conditional types

// Generics can be extended
type IsString<T> = T extends string ? string : number;

type A = IsString<string>; // "yes"
type B = IsString<number>; // "no"

// keyof and typeof
type PlayerKeys = keyof PlayerI;
const user = { id: 1, name: "Pratik" };
type PlayerTypeOf = typeof user;
type UserKeys = keyof PlayerTypeOf;

// Utility types
interface User {
  id: number;
  name: string;
  email?: string;
}

type PartialUser = Partial<User>; // All optional
type ReadonlyUser = Readonly<User>; // All readonly
type PickUser = Pick<User, "id" | "name">; // Select some
type OmitUser = Omit<User, "email">; // Exclude some

// Mapped types - Convert all properties in type based rule

type Optional<T> = {
  [K in keyof T]?: T[K];
};

interface Person2 {
  name: string;
  age: number;
}

type OptionalPerson = Optional<Person2>;
// { name?: string; age?: number }

// infer
type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

function greet() {
  return "Hello";
}

type GreetReturn = ReturnTypeOf<typeof greet>; // string
