//here customBind is called upon displayName.So 'this' points to displayName()
Function.prototype.customBind = function (...args) {
  let toBeCalledFunc = this;
  let outerFuncParam = args.slice(1);
  return function (param) {
    let totalParams = outerFuncParam.concat(param);
    let referenceObject = args[0];
    toBeCalledFunc.apply(referenceObject, totalParams);
  };
};

let obj = {
  firstName: "Pratik",
};

let displayName = function (...args) {
  console.log(args);
  console.log(`${args[0]} & ${args[1]} my name is ${this.firstName}`);
};

//displayName.bind(obj, "Hi")("Hello");
displayName.customBind(obj, "Hi")();
