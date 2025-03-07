function joinArrayOfArrays(arr) {
  // your code here
  let myArr = [];
  for (let x of arr) {
    myArr = myArr.concat(x);
  }
  return myArr;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
