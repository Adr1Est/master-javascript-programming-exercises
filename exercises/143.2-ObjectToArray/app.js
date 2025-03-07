function listAllValues(obj) {
  // your code here
  let values = [];
  for (let val in obj) {
    //console.log(obj[val]);
    values.push(obj[val]);
  }
  return values;
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
