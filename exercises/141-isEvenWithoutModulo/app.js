function isEvenWithoutModulo(num) {
    // your code here
    let division = num / 2;
    let check = Math.abs(division).toString().split("");
    if (check.length > 1) {
        return false;
    } else { return true; }
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
