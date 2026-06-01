function flatten(obj) {
  let outputObj = {};
  if (typeof obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    let outputArr = [];
    obj.map((value, index) => {
      if (Array.isArray(value)) {
        obj[index] = outputArr.concat(flatten(value));
      }
      outputArr.concat(value);
    });
    return outputArr;
  }

  for (let key in obj) {
    if (typeof obj === "object") {
      const output = flattenObj(obj);
      outputObj[key] = output;
    } else {
      const output = flatten(obj[key]);
      outputObj[key] = output;
    }
  }
}

function flattenObj(obj, parentKey, result = {}) {
  for (let key in obj) {
    const customKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj === "object") {
      flattenObj(obj[key], customKey, result);
    } else {
      result[customKey] = obj[key];
    }
  }
  return result;
}

let obj1 = {
  name: "pratik",
  skills: ["react js", ["typescript", ["django-rest-framework"]]],
  address: {
    street: "473",
    state: {
      name: "west bengal",
    },
  },
  children: null,
};
