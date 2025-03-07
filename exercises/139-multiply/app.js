function multiply(num1, num2) {
    // your code here
    let producto = 0;
    if (num2 > 0) {
        for (let i = 0; i < num2; i++) {
            producto += num1;
        }
        return producto;
    } else {
        for (let i = 0; i > num2; i--) {
            producto += num1;
        }
        return (producto != 0) ? -producto : 0;
    }

}

let output = multiply(4, 7);
console.log(output); // --> 28
