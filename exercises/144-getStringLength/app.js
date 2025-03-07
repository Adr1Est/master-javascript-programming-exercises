function getStringLength(string) {
    // your code here
    let auxArr = string.split("");
    let count = 0;
    //console.log(auxArr);
    for (let e of auxArr) { count++; }
    return count;
}

let output = getStringLength('hello');
console.log(output); // --> 5
