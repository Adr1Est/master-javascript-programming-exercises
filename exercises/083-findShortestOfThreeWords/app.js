function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let auxiliar = word1;
    if (word2.length < auxiliar.length) { auxiliar = word2 };
    if (word3.length < auxiliar.length) { auxiliar = word3 };
    return auxiliar;
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
