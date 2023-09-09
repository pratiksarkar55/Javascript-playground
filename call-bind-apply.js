let obj = {
  name: "Roni",
  getName: function (...args) {
    console.log("One", this);
    console.log(`${args[0]}, my name is ${this.firstName} and also ${args[1]}`);
  },
};
let data = {
  firstName: "Pratik",
};
obj.getName.call(data, "Hi", "Harry Potter");
obj.getName.bind(data, "test")("Hi Bind", "Harry Potter Bind");
obj.getName.apply(data, ["Hi Apply", "Harry Potter Apply"]);
