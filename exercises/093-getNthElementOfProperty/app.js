// Write your function here
function getNthElementOfProperty(obj, key, n) {
  return (key in obj) ? obj[key][n] : undefined;
}