function removeNumberValues(obj) {
    // your code here
    for (let key in obj) {
        if (!isNaN(obj[key])) {
            delete obj[key];
        }
    }
    return obj;
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
