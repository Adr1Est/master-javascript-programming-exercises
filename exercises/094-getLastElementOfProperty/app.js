// Write your function here
function getLastElementOfProperty(obj, key) {
  return (key in obj) ? obj[key][obj[key].length - 1] : undefined;
}