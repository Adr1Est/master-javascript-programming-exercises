function modulo(num1, num2) {
    // your code here
    if (num2 === 0 || isNaN(num1) || isNaN(num2)) {
        return NaN;
    }
    return num1 - Math.floor(num1 / num2) * num2;
}

let output = modulo(25, 4);
console.log(output); // --> 1
