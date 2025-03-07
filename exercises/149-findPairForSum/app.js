function findPairForSum(array, number) {
  // your code here
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    for (let x = 1; x < array.length; x++) {
      if (array[i] + array[i + x] === number && resultado.length === 0) {
        resultado.push(array[i]);
        resultado.push(array[i + x]);
      }
    }
  }
  return resultado;
}

//let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
let pair = findPairForSum([3, 34, 4, 12, 5, 2, 6], 9);
console.log(pair); // --> [4, 5]
