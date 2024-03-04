let obj = {
  name: "pratik",
};
//alert(obj);//[obj obj]

let num = Number(obj);
console.log(1 + num); //NaN

let obj2 = {
  name: "pratik",
  [Symbol.toPrimitive](hint) {
    console.log("inside symbol");
    return hint == "string" ? `{name: "${this.name}"}` : this.name.length;
  },
  toString: function () {
    console.log("called for string hint");
    return this.name;
  },
  valueOf: function () {
    console.log("called for default/number hint");
    return this.name.length;
  },
};
alert(obj2); //pratik
let num2 = Number(obj2);
console.log(1 + num2); //7
console.log(obj2 == 6); //true
