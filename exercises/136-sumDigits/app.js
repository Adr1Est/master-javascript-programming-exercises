function sumDigits(num) {
    // your code here
    let suma = 0;
    let arrnum = num.toString().split("");
    let newArr = arrnum.map((e) => {
        if (e === "-") {
            return e = -1
        } else {
            return parseInt(e);
        }
    });
    for (let i = 0; i < newArr.length; i++) {
        let newNum;
        if (newArr[i] === -1) {
            newNum = newArr[i] * newArr[i + 1];
            i += 1;
            suma += newNum;
        } else {
            suma += newArr[i];
        }
    }
    return suma;;
}

let output = sumDigits(-316);
console.log(output); // --> 4
