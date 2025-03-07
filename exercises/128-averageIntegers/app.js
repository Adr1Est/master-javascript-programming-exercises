function average(arr) {
  // your code here
  return sum(arr) / arr.length;
}

function sum(arr) {
  // your code here
  let suma = 0;
  for (let x of arr) { suma += x; }
  return suma;
}

console.log(average([1, 2])); // --> 1.5
