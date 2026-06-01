//Functions in JavaScript remember the scope in which they were defined, not where they are called.
// let x = 5;
// function inner() {
//   console.log(x);
// }
// function outer() {
//   let x = 10;
//   inner();
// }
// outer();

// var a = 10;
// var a = 20;
// console.log(a); // 20;
// var a = 10;
// {
//   let a = 30;
//   console.log(a); // 30
// }
// console.log(a); // 10

// shadowing - inner variable scope shadows the outer variable variable value.

// let a = 10;
// {
//   let a = 30;
//   console.log(a); // 30 . This shadows the outer variable
// }

// console.log(a); // 10

// let a = 10
// {
//   var a = 30;
// }

// | Feature                | var                            | let           | const         |
// | ---------------------- | ------------------------------ | ------------- | ------------- |
// | Scope                  | Function                       | Block         | Block         |
// | Hoisting               | Yes (initialized to undefined) | Yes (TDZ)     | Yes (TDZ)     |
// | Redeclaration          | ✔ Allowed                      | ❌ Not allowed | ❌ Not allowed |
// | Reassignment           | ✔ Allowed                      | ✔ Allowed     | ❌ Not allowed |
// | TDZ                    | No                             | Yes           | Yes           |
// | Global window property | ✔ Yes                          | ❌ No          | ❌ No          |
