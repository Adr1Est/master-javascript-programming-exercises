function getEvenElementsAtProperty(obj, key) {
  // your code here
  return (Array.isArray(obj[key]) && obj[key].length != 0) ? obj[key].filter((e) => {
    return e % 2 == 0;
  }) : [];
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
