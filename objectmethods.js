let obj1 = {
  firstName: "John",
  secondName: "Doe",
  address: {
    primary: "subhasgram",
  },
};

// console.log(Object.entries(obj1));

// console.log(obj1.hasOwnProperty("address"));

// Object.freeze(obj1); freeze is very strict

// obj1["secondName"] = "Sarkar"; //can't change exisitng property value
// obj1["age"] = 30; // can't add new property

// console.log(obj1);

Object.seal(obj1); // can change exsiting property value.

obj1["secondName"] = "Sarkar";
obj1["age"] = 30; // can't add new property

console.log(obj1);
