function search(array, value) {
  // your code here
  /*
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) { return array.indexOf(value); }
  }
  return null;
  */

  let inicio = 0;
  let final = array.length - 1;
  while (inicio <= final) {
    let mitad = Math.floor((inicio + final) / 2);
    if (array[mitad] === value) {
      return mitad;
    } else if (array[mitad] < value) {
      inicio = mitad + 1;
    } else {
      final = final - 1;
    }
  }
  return null;
}
let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4
