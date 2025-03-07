// Write your function here
function computeAverageOfNumbers(arr) {
  let suma = 0;
  if (arr.length === 0) {
    return suma;
  } else {
    arr.forEach((e) => {
      suma += e;
    });
    return suma / arr.length;
  }
}