// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
  let filtro = (Array.isArray(obj[key]) && key in obj) ? obj[key].filter((e) => typeof e == "string" && e.length % 2 != 0) : [];
  return filtro;
}