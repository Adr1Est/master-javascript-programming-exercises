function getSquaredElementsAtProperty(obj, key) {
  // your code here
  return (Array.isArray(obj[key]) && obj[key].length != 0) ? obj[key].map((e) => {
    return e ** 2;
  }) : [];
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
