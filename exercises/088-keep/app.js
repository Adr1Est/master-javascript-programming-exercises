// Write your function here
function keep(array, elemento) {
  let elementosFiltrados = array.filter((e) => e == elemento);
  return elementosFiltrados;
}

let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]