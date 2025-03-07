function getLargestElement(arr) {
  // your code here
  if (arr.length != 0) {
    let masgrande = arr[0];
    for (let x of arr) {
      if (masgrande < x) { masgrande = x }
    }
    return masgrande;
  } else {
    return 0;
  }
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;