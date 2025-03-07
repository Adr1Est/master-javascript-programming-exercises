function isRotated(str1, str2) {
  // your code here
  if (str1.length != str2.length) {
    return false;
  }

  let arr1 = str1.split("");

  let arr2 = str2.split("");

  let contador = arr2.length;

  while (contador > 0) {
    contador--;
    let char = arr2[0]
    arr2.shift()
    arr2.push(char)
    if (JSON.stringify(arr2) == JSON.stringify(arr1))
      return true
  }

  return false
}


console.log(isRotated('hello world', 'orldhello w')); // --> true
console.log(isRotated('hello world', 'omrel wp')); // --> false

