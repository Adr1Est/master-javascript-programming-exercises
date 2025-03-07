function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  let longPar = (Array.isArray(obj[key]) && obj[key].length != 0) ? obj[key].filter((e) => {
    return e.length % 2 === 0;
  }) : [];
  return longPar;
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
