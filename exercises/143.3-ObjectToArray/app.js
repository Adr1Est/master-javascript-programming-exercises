function convertObjectToList(obj) {
  // your code here
  let arrA = [];
  let auxArr = [];
  for (let key in obj) {
    auxArr = [];
    auxArr.push(key);
    auxArr.push(obj[key]);
    arrA.push(auxArr);
  }
  return arrA;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
