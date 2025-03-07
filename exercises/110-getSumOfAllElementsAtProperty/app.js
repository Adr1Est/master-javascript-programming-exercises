function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if (Array.isArray(obj[key]) && obj[key].length != 0) {
        let suma = 0;
        for (let i = 0; i < obj[key].length; i++) {
            suma += obj[key][i];
        }
        return suma;
    } else {
        return 0;
    }
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
