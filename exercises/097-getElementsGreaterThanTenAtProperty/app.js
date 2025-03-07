// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
  let filtro = (Array.isArray(obj[key]) && key in obj) ? obj[key].filter((e) => e > 10) : [];
  return filtro;
}