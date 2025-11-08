function customBind(...args) {
  const func = this;
  outerArgs = args.slice(1);
  return function (...innerArgs) {
    return func.apply(args[0], [...outerArgs, ...innerArgs]);
  };
}

function customApply(...args) {
  func = this;
  restArgs = args.slice(1);
  return func.call(args[0], ...restArgs);
}

Function.prototype.customBind = customBind;

// Example usage:
let person = {
  name: "Alice",
};

function greet(greeting, title) {
  console.log(`${greeting}, ${title} ${this.name}!`);
}

// const greetAlice = greet.customBind(person, "Holla");
// greetAlice("Mrs"); // Output: Holla, Mrs Alice!

// Star pattern

function rightAngledStartpattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let col = i;
    let output = "";
    for (let j = 0; j < col; j++) {
      output = output + "*";
    }
    console.log(output);
    output = output + "\n";
  }
}

//rightAngledStartpattern(5);

function centeredStarTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    const spaces = rows - i; // (total rows - current row)
    const stars = 2 * i - 1; // (2* current row -1)
    let output = "";
    for (let j = 0; j < spaces; j++) {
      output = output + " ";
    }
    for (let j = 0; j < stars; j++) {
      output = output + "*";
    }
    console.log(output);
    output = output + "\n";
  }
}

//centeredStarTriangle(5);

//0 1 1 2 3 5 8 13
function fibbonacciSeries(n) {
  if (n <= 1) return n;

  return fibbonacciSeries(n - 1) + fibbonacciSeries(n - 2);
}

// let series = [];
// for (let i = 0; i < 8; i++) {
//   series.push(fibbonacciSeries(i));
// }

// console.log(series);

function validParenthesis(inputText) {
  const parenthesisMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const keyMaps = Object.keys(parenthesisMap);
  const stack = [];
  let isValid = true;
  for (let input of inputText) {
    if (keyMaps.includes(input)) {
      stack.push(input);
    } else {
      let output = stack.pop();
      if (parenthesisMap[output] !== input) {
        isValid = false;
        break;
      }
    }
  }
  if (stack.length > 0) {
    isValid = false;
  }
  return isValid;
}
//console.log(validParenthesis("()[{()}"));

const input = {
  name: "pratik",
  age: 28,
  address: {
    street: "begur",
    pin: "560068",
  },
};

function cloneDeep(obj) {
  var keys = Object.keys(obj);
  let output = {};

  // if primitive values for null.As null is also of type object
  if (obj === null || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map((item) => cloneDeep(item));
  }
  for (let key of keys) {
    let clonedOutput = cloneDeep(obj[key]);
    output[key] = clonedOutput;
  }
  return output;
}

// spread operator

obj1 = {
  name: "roni",
};

obj2 = {
  age: 20,
};

testObj = { ...obj1, ...obj2 };
console.log(testObj);

// rest operator
let { age, ...rest } = { name: "roni", age: 2, salary: 2000 };
console.log(rest);
