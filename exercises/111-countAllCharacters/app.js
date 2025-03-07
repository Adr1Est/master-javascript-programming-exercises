// Write your function here
function countAllCharacters(str) {
  let letras = str.split("");
  let obj = {};

  for (let key of letras) {
    if (!(key in obj)) {
      obj[key] = 1;
    } else {
      obj[key]++;
    }
  }
  return obj;
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
