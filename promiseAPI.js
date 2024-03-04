let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(20);
  }, 5000);
});

let promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(30);
    reject("Rejected Promise");
  }, 1000);
});

let promises = [promise1, promise2, promise3];

// Resolve promise when all promises are resolved.Reject on first promise reject.
// Promise.all(promises).then(
//   (obj) => {
//     console.log(obj);[10,20,30]
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

// waits for the first promise to settle, and its result/error becomes the outcome
// Promise.race(promises).then(
//   (obj) => {
//     console.log(obj);//30
//   },
//   (err) => console.error(err) // "Rejected Promise"
// );

// Waits for the first promise to fullfill.If no promise fullfils give Aggregate Error

// Promise.any(promises).then(
//   (obj) => {
//     console.log(obj); //30
//   },
//   (err) => console.error(err)
// );
