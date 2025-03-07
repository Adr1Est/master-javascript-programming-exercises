function getAllLetters(str) {
    // your code here
    let myArr = [];
    for (let i = 0; i < str.length; i++) {
        myArr.push(str[i]);
    }
    return myArr;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
