// Write your function here
const select = (arr, obj) => {
  let myObj = {};
  if (Array.isArray(arr)) {
    for (let key of arr) {
      if (key in obj) {
        myObj[key] = obj[key];
      }
    }
  }
  return myObj;
}

let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }