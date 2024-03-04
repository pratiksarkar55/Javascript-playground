//async function test() {
//await only works for settled promise
//   await setTimeout(() => {
//     console.log("Promise resolved");
//   }, 2000);
//   console.log("after promise resolved");
// }
async function test2() {
  let data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("resolving");
      resolve(10);
    }, 10000);
  });
  console.log("after promise resolved");
  return data;
}
test2().then((obj) => console.log(obj));
console.log("main thread");
