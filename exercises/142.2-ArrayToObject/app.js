function fromListToObject(array) {
  // your code here
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array[i].length; x++) {
      obj[array[i][x]] = array[i][x + 1];
      x++;
    }
  }
  return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
