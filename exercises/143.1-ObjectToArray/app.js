function getAllKeys(obj) {
  // your code here
  let keys = [];
  for (let key in obj) {
    //console.log(key);
    keys.push(key);
  }
  return keys;
}

let output = getAllKeys({ name: "Sam", age: 25, hasPets: true });
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
