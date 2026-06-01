var rotate = function (nums, k) {
  let setElements = new Set();
  let d = nums.length;
  k = k % d;
  // putting elements into set
  for (let i = 0; i < k; i++) {
    setElements.add(nums[i]);
  }

  //left shifting
  for (let i = k; i < d; i++) {
    nums[i - k] = nums[i];
  }
  // put elements set back
  for (let i = d - k; i < nums.length; i++) {
    nums[i] = Array.from(setElements)[i - (d - k)];
  }
};

let arr = [1, 2, 3, 4, 5, 6, 7];
let rotation = 3;

rotate(arr, rotation);

console.log(arr);

// for left rotate identify rotation from start
//3217654  // rotate once
//4567123  // rotate whole
//[4,5,6,7,1,2,3]

// For right rotate identify rotation from end
//7654321 // rotate once
//5671234 // rotate whole
//[5, 6, 7, 1, 2, 3, 4];
