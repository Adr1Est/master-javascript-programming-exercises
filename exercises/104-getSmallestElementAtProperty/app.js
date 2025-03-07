function getSmallestElementAtProperty(obj, key) {
  // your code here
  let menorValor = 0;
  if (Array.isArray(obj[key]) && obj[key].length != 0) {
    menorValor = obj[key][0];
    for (let x of obj[key]) {
      if (menorValor > x) { menorValor = x }
    }
    return menorValor;
  } else {
    return [];
  }
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
