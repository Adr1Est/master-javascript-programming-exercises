function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length != 0) {
    let prod = 1;
    for (let i = 0; i < arr.length; i++) {
      prod *= arr[i];
    }
    return prod;
  } else {
    return 0;
  }

}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
