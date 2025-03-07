function repeatString(string, num) {
    // your code here
    let myStr = "";
    for (let i = 0; i < num; i++) {
        myStr += string;
    }
    return myStr;
    /*return string.repeat(num);*/
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
