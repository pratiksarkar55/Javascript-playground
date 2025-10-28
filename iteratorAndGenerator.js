//iterator
//An iterator is any object that implements the Iterator Protocol
// Iterator Protocol - an object is an iterator when it implements a next() method with the following semantics:
// next() returns an object with two properties:
// value: the next value in the iteration sequence.
// done: true if the last value in the sequence has already been consumed, otherwise false.

const arr = [1, 2, 3, 4];

const createIterator = (input) => {
  let index = 0;
  return {
    next: () => {
      if (index < input.length) {
        let data = { value: input[index], hasNext: true };
        index++;
        return data;
      } else {
        return { value: undefined, hasNext: false };
      }
    },
  };
};

let iterator = createIterator(arr);

//does not work as iterator is not iterable
// for (let value of iterator) {
//   console.log("value ", value);
// }

// console.log([...iterator]); // does not work as iterator is not iterable

// console.log(iterator.next());

// console.log(iterator.next());

// console.log(iterator.next());

// console.log(iterator.next());

// console.log(iterator.next());

// const myArray = [1, 2, 3];

// // 1. Get the iterator by calling [Symbol.iterator]()
// const iterator = myArray[Symbol.iterator]();

// for (const value of iterator) {
//   console.log(value);
// }

// generator
// A generator is a function declared with function* (a generator function).
// When a generator function is called, it returns a Generator Object, which is both an iterator(It has next()) and an iterable(It has [Symbol.iterator]() method).

// function* generator(param) {
//   try {
//     yield param + 1;
//     console.log("test");
//     yield param + 2;
//   } catch (err) {
//     console.log(err);
//   }
// }

// const generateSequence = generator(50);
// console.log(generateSequence.next());
// console.log(generateSequence.throw(new Error("error thrown"))); // will be caught inside generator and  gives undefined value and done true
// console.log(generateSequence.return(5)); // will return value 5 and done true
// console.log(generateSequence.next()); // gives undefined value and done true as we returned.
// console.log(generateSequence.next()); // This will only run if the error is not thrown or return is not called

// for (const value of generateSequence) {
//   console.log(value);
// }

/**
 * When an object implements the Iterable Protocol (meaning it has a method named [Symbol.iterator]() that returns an iterator),
 *  it becomes an iterable, which can then be traversed by a for...of loop or the spread operator (...).
 * Arrays and Maps are built-in iterables.
 *
 */
