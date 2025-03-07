// Write your function here
const getFirstElementOfProperty = (obj, key) => {
  return (key in obj) ? obj[key][0] : undefined;
}