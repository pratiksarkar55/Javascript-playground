// This is iterable not an iterator
// let obj = {
//   first: "Pratik",
//   last: "Sarkar",
//   [Symbol.iterator]: function* () {
//     yield this.first;
//     yield this.last;
//   },
// };

// This iterator
// const createIterator = (input) => {
//   let index = 0;

//   return {
//     next() {
//       if (index < input.length) {
//         return { value: input[index++], done: false };
//       } else {
//         return { value: undefined, done: true };
//       }
//     },
//     [Symbol.iterator]() {
//       // Iterable is needed in es features like map,filter
//       return this;
//     },
//   };
// };

// const arr = [1, 2, 3, 4];
// const iterator = Iterator.from(createIterator(arr));

// const mapped = iterator.map((x) => x * 2); // ES2025 iterator helper
// console.log([...mapped]);

function test(value) {
  if (value) {
    return new Promise((resolve, rej) => {
      setTimeout(function () {
        resolve(5);
      }, 2000);
    });
  } else {
    return "Nothing is passed";
  }
}

Promise.try(function () {
  return test();
}).then((obj) => {
  console.log(obj);
});

Promise.try(function () {
  return test(10);
}).then((obj) => {
  console.log(obj);
});
