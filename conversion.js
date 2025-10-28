let a = 1 + "2";
console.log(a); //12 as + prioritizes string concatenation when one of the operands is string.
a = 1 - "2";
console.log(a); // -1
a = 2 * "2";
console.log(a); // 4

a = "2" * "2";
console.log(a); // 4

a = "abc" - "abc";
console.log(a); // NaN

a = Number("22z");
console.log(a); //NaN

a = Number(undefined);
console.log(a); //NaN

a = Number(null);
console.log(a); //0

a = Boolean(" ");
console.log(a); //true

a = Boolean("0");
console.log(a); //true

//"",0,false,null,undefined are false and rest all are true.
a = Boolean("");
console.log(a); //false
a = Boolean(0);
console.log(a); //false
a = Boolean(null);
console.log(a); //false
a = Boolean(undefined);
console.log(a); //fasle
