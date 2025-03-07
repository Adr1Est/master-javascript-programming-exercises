function computeSumOfAllElements(arr) {
  // your code here
  if (arr.length != 0) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  } else {
    return 0;
  }
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
