// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
  let filtro = (Array.isArray(obj[key]) && key in obj) ? obj[key].filter((e) => e < 100) : [];
  return filtro;
}