function getOddElementsAtProperty(obj, key) {
  // your code here
  return (Array.isArray(obj[key]) && obj[key].length != 0) ? obj[key].filter((e) => {
    return e % 2 != 0;
  }) : [];
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
