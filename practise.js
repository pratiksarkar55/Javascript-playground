// ---------------------------------polyfill for bind--------------------------------------------

// const obj = {
//   name: "Pratik",
// };

// function display(age, number) {
//   console.log(
//     `Name is ${this.name} and age is ${age} and phone number is ${number}`
//   );
// }

// const func1 = display.bind(obj, 32);
// func1("1234567890");

// function customBind(...args) {
//   const outerObj = args[0];
//   const outerParam = args.slice(1);
//   const func = this;
//   return function (innerParam) {
//     func.apply(outerObj, [...innerParam, ...outerParam]);
//   };
// }

// Function.prototype.customBind = customBind;

// const func2 = display.customBind(obj, 32);
// func1("8777244185");

//-------------------------------------- polyfill for call----------------------------------------------

// const obj = {
//   name: "Pratik",
// };

// function display(age, number) {
//   console.log(`Name is ${this.name} and age is ${age} and number is ${number}`);
// }

// display.call(obj, 32, "8777244185");

// function customCall(...args) {
//   const func = this;
//   const ref = args[0];
//   const params = args.slice(1);

//   func.apply(ref, params);
// }

// Function.prototype.customCall = customCall;

// display.customCall(obj, 33, "6289383169");

//-------------------------------------------------polyfill for apply-----------------------------------------------

// function customApply(...args) {
//   const func = this;
//   const ref = args[0];
//   const params = args.slice(1);

//   return func.call(ref, ...params);
// }

// Function.prototype.customApply = customApply;

// const obj = {
//   name: "Pratik",
// };

// function display(param) {
//   return `Name is ${this.name} and age is ${param[0]} and number is ${param[1]}`;
// }

// const value = display.customApply(obj, [32, "8777"]);
// console.log(value);

//---------------------------------------------Deep copy---------------------------------------------------------------------------
// let obj = {
//   name: "Pratik",
//   address: {
//     street: "473",
//     city: ["Kolkata"],
//   },
//   age: 32,
//   skills: [{ name: "react.js" }, { test: { name: "testname" } }],
// };

// function customCloneDeep(obj) {
//   let output = {};
//   if (typeof obj !== "object" || obj === null) {
//     return obj;
//   }
//   //handling array
//   if (Array.isArray(obj)) {
//     return obj.map((data) => {
//       return customCloneDeep(data);
//     });
//   }

//   for (key in obj) {
//     output[key] = customCloneDeep(obj[key]);
//   }
//   return output;
// }

// const clonedObj = customCloneDeep(obj);

// clonedObj.name = "roni";
// console.log(clonedObj);
// console.log(obj);

//--------------------------------------flatten an array----------------------------
// let arr1 = ["Kolkata", ["West Bengal", ["Subhasgram", ["437"]]], "my house"];

// function flattenArray(arr) {
//   return arr.reduce(function (prevValue, currentValue) {
//     if (Array.isArray(currentValue)) {
//       return prevValue.concat(flattenArray(currentValue));
//     } else {
//       return prevValue.concat(currentValue);
//     }
//   }, []);
// }

// console.log(flattenArray(arr1));

// -------------------------------flatten nested object----------------------------------------------

let obj = {
  address: {
    street: "J N Bose road",
    number: {
      name: "473",
    },
  },
  name: "Pratik",
};

function flattenNestedObject(obj, parentKey, result) {
  for (let key in obj) {
    const customKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object") {
      flattenNestedObject(obj[key], customKey, result);
    } else {
      result[customKey] = obj[key];
    }
  }
  return result;
}

console.log(flattenNestedObject(obj, null, {}));
