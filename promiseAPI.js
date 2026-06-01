//Promises are objects that represent the eventual completion or failure of async operations
// THere are 3 stages of Promises - pending,fullfilled,rejected

// -----------------------consuming promise & promise chaining---------------------

// const promise = fetch("https://jsonplaceholder.typicode.com/todos");
// console.log(promise);
// promise
//   .then(function (obj) {
//     console.log("In first then", obj);
//     //throw new Error("Test Error");
//     console.log(a);
//     return new Error("Test Error");
//   })
//   .then(function (obj) {
//     console.log("In second then", obj);
//   })
//   .catch(function (e) {
//     // this will catch a is not defined as well.
//     console.log("Error in catch block", e);
//   });
// console.log("hello world");

// --------------------------Constructing Promises--------------------------------------

// catch block handles rejected promises as well as ALL errors in then block
// The lowermost catch will catch all,so we can put catch for respective then block as well.

// function createPromise() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("Promise 1 resolved with value", 10);
//     }, 3000);
//   });
// }

// function createAnotherPromise(value) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("Promise 2 resolved with value ", value);
//     }, 1000);
//   });
// }

// function rejectPromise(value) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject("Promise rejected with value ", value);
//     }, 1000);
//   });
// }

// createPromise()
//   .then(function (value) {
//     console.log(value);
//     return createAnotherPromise(value);
//   })
//   .then(function (value) {
//     console.log(value);
//     return rejectPromise(value);
//   })
//   .catch(function (e) {
//     console.log(e);
//   });

// --------------------------Promise APIs--------------------------------------

// let promise1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// let promise2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve(20);
//   }, 5000);
// });

// let promise3 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     // resolve(30);
//     reject("Rejected Promise");
//   }, 1000);
// });

// let promises = [promise1, promise2, promise3];

// //Resolve promise when all promises are resolved.Reject on first promise reject.
// Promise.all(promises).then(
//   (obj) => {
//     console.log(obj);
//     [10, 20, 30];
//   },
//   (err) => console.error(err) // "Rejected Promise"
// );

//wait for all promises to settle and return the result in .then()
// Promise.allSettled(promises).then(
//   (obj) => {
//     console.log(obj); // return all settled (fullfilled/rejected) promises[{"status":"fullfiled",value:10},{"status":"fullfiled",value:20}]
//   },
//   (err) => console.error(err) // no rejected promise will be returned
// );

//waits for the first promise to settle, and its result/error becomes the outcome
// Promise.race(promises).then(
//   (obj) => {
//     console.log(obj); //30
//   },
//   (err) => console.log(err) // "Rejected Promise"
// );

// Waits for the first promise to fullfill.If no promise fullfils give Aggregate Error

// Promise.any(promises).then(
//   (obj) => {
//     console.log(obj); //30
//   },
//   (err) => console.error(err)
// );

//------------------------Making 100 api calls-----------------------------------------------------------------------------------

const promises = [];

for (let i = 0; i < 1000; i++) {
  promises.push(
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((obj) => obj.json())
      .then((data) => data)
  ); // ❌ Not awaited, but fetch is async
  // console.log(response); // This logs a Promise immediately
}

console.log(promises);

Promise.all(promises).then((obj) => {
  console.log(obj);
});
