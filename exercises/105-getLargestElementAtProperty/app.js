function getLargestElementAtProperty(obj, key) {
  // your code here
  if (Array.isArray(obj[key]) && obj[key].length != 0) {
    let maxValue = obj[key][0];
    for (let x of obj[key]) {
      if (maxValue < x) { maxValue = x }
    }
    return maxValue;
  } else {
    return [];
  }
}

let obj = {
  key: [1, 2, 4, -3]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
