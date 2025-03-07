function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let total = 0;
  let average;
  if (Array.isArray(obj[key]) && obj[key].length != 0) {
    for (let x of obj[key]) {
      if (!isNaN(x)) {
        total += x;
      } else {
        total += 0;
      }
    }
    average = total / obj[key].length;
  } else {
    average = 0;
  }
  return average;
}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2 