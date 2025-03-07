// Write your function here
function getIndexOf(char, cadena) {
  let indicador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === char) {
      indicador = i;
      return indicador;
    } else {
      indicador = -1;
    }
  }
  return indicador;
}
