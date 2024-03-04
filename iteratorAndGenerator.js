//iterator

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

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

// generator

function* generator(param) {
  try {
    yield param + 1;
    console.log("test");
    yield param + 2;
  } catch (err) {
    console.log(err);
  }
}

const generateSequence = generator(50);
console.log(generateSequence.next());
// console.log(generateSequence.throw(new Error("error thrown")));
// console.log(generateSequence.return(5));
// console.log(generateSequence.next()); // gives undefined value and done true as we returned.
console.log(generateSequence.next());
