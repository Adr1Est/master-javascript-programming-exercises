let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    // your code here
    for (let key in obj) {
        if (!isNaN(obj[key]) && obj[key] < num) {
            delete obj[key];
        }
    }
    return obj;
}
