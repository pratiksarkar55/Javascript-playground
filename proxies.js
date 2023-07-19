const obj = {
  firstName: "John",
  secondName: "Doe",
};

const handler = {
  get: (target, props) => {
    if (props in target) {
      return target[props];
    }
    throw new TypeError("Invalid property ", props);
  },
  set: (target, props, val) => {
    if (props in target) {
      target[props] = val;
      return true;
    }
    return new TypeError("New property can't be added");
  },
};

let proxyObject = new Proxy(obj, handler);

// console.log(proxyObject.firstName); //John
// console.log(proxyObject.lastName); //TypeError

proxyObject.firstName = "Roni";
proxyObject.secondName = "Sarkar";
console.log(proxyObject.firstName);
console.log(proxyObject.secondName);
