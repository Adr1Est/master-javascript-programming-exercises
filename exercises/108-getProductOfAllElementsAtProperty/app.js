function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  if (Array.isArray(obj[key]) && obj[key].length != 0) {
    let producto = 1;
    for (let i = 0; i < obj[key].length; i++) {
      producto *= obj[key][i];
    }
    return producto;
  } else {
    return 0;
  }
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
