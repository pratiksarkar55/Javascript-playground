function addAsync(num1, num2, callback) {
  if (!num1 || !num2) {
    callback(new Error("Invalid arguments"), null);
  } else {
    callback(null, num1 + num2);
  }
}

addAsync(2, 1, function (err, value) {
  if (err) {
    throw err;
  } else {
    console.log("Using callback ", value);
  }
});

//Promisification- transforming a function with a callback to a function that returns a promise
function myPromisification(fn) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      function customCallBack(err, results) {
        if (err) {
          reject(err);
        }
        resolve(results.length === 1 ? results[0] : results);
      }
      args.push(customCallBack);
      fn.call(this, ...args);
    });
  };
}

myPromisification(addAsync)(100, 200)
  .then((obj) => console.log("Using promisify", obj))
  .catch((err) => console.log(err));
