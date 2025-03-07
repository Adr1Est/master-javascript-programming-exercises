function isIsogram(text) {
  // your code here
  let check = text.toLowerCase().split("");
  let obj = {};
  for (let x of check) {
    if (!(x in obj)) {
      obj[x] = 1;
    } else {
      obj[x]++;
    }
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      return false
    }
  }
  return true;

}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
