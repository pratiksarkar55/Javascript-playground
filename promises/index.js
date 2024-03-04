//Pending->Fullfilled(Resolve)/Reject->Settled(Resolve/Rejected)

// let a = Promise.resolve(10);
// console.log(
//   a
//     .finally(() => {
//       console.log("Finally will run if promise is Settled(Resolved/Rejected)");
//       return 10; // return is ignored
//     })
//     .then((obj) => {
//       console.log(obj); //10
//       return obj;
//     })
//     .then((obj) => {
//       console.log(obj); //10
//       return Promise.resolve(20);
//     })
//     .then((obj) => {
//       console.log(obj); //20
//     })
//     .then((obj) => {
//       console.log(obj); //undefined
//       return new Promise((resolve, reject) => {
//         resolve(x);
//         // resolve(20); //ignored
//         // reject(10); //will be ignore if resolved first
//       });
//     })
//     .then(
//       (obj) => {},
//       // here onrejected callback will be executed as 2nd paramter to .then
//       // it will also handle error on top of the promise chain
//       (err) => {
//         console.log("error 1: " + err);
//         return err;
//       }
//     )
//     .then(
//       (obj) => {
//         console.log("It's coming here: " + obj);
//       },
//       (err) => {
//         console.log("error2: " + err);
//       }
//     )
//     .catch((err) => console.log("error ", err)) // can catch rejected values if not handled in .then .
// );

// let promise = new Promise((resolve, reject) => {
//   resolve(200);
// });
// promise.then(console.log);

//first hello then hello2 then promise is resolved.
// let promise = new Promise((resolve, reject) => {
//   resolve(200);
//   console.log("hello inside executor function");
// });
// promise.then(console.log);
// console.log("hello2 in main thread");

// This will give error as it's caught before resolve
// let promise1 = new Promise((resolve, reject) => {
//   console.log("hello b promise1" + b);
//   resolve(200);
// });

// promise1.then(console.log).catch((err) => {
//   console.error(err);
// });

//This will not give error as it's already resolved so thrown error will not be rejected.Not sure why not propagated to browser.
// try {
//   let promise = new Promise((resolve, reject) => {
//     resolve(400);
//      throw new Error("Invalid");

//   });

//   promise.then(console.log).catch((err) => {
//     console.error(err);
//   });
// } catch {
//   (err) => {
//     console.error(err);
//   };
// }

//This will give error and caught as it's sync code and explicit error is thrown.
// let promise = new Promise((resolve, reject) => {
//   throw new Error("Invalidss");
//   resolve(400);
// });

// promise
//   .then(() => {}, console.log)
//   .catch((err) => {
//     console.log("caught", err);
//   });

// the error won't be caught.Since it's async and not inside reject.All sync errors inside
// the executor will be caught
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     // throw new Error("Whoops!"); // this won't be caught
//     reject(Error("Whoops!")); // this will catch error
//   }, 1000);
// }).catch(alert);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// let prm1 = new Promise((resolve, reject) => {
//   resolve(100);
// });
// // here error will be caught
// prm1
//   .then(
//     (value) => console.log(a),
//     (err) => console.error("Error:", err)
//   )
//   .catch((err) => console.log("Error Caught:", err));
// //here error will not be caught
// prm1.then(console.log, (err) => console.error("Error:", err));
