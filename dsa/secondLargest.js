let arr = [1, 2, 4, 7, 7, 5];

function secondLargest(input) {
  let largest = input[0];
  let secondLargest = -1; // -1 If number is not negeative and Number.MIN_SAFE_INTEGER if it has negatives

  for (let i = 0; i < input.length; i++) {
    if (input[i] > largest) {
      secondLargest = largest;
      largest = input[i];
    } else if (input[i] > secondLargest && input[i] < largest) {
      secondLargest = input[i];
    }
  }
  return secondLargest;
}

console.log(secondLargest(arr));
