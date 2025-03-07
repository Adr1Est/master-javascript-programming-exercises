let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
    for (let key in obj) {
        if (!isNaN(obj[key]) && obj[key] > num) {
            delete obj[key];
        }
    }
    return obj;
}

console.log(removeNumbersLargerThan(5, obj));
