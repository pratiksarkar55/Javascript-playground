let obj1 = {
  firstName: "John",
  secondName: "Doe",
  address: {
    primary: "subhasgram",
  },
};

console.log(Object.entries(obj1));

console.log(obj1.hasOwnProperty("address"));

// Object.freeze(obj1);

// obj1["secondName"] = "male"; //can't change exisitng property value

// console.log(obj1);

// Object.seal(obj1); // can change exsiting property value.

// obj1["secondName"] = "male";

// console.log(obj1);
