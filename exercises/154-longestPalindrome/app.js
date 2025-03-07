function findLongestPalindrome(sentence) {
  // your code here
  let palindromo = "";

  for (let i = 0; i < sentence.length; i++) {
    let word = "";
    for (let x = i; x < sentence.length; x++) {
      word += sentence[x];
      if (isPalindrome(word) && word.length > palindromo.length) {
        palindromo = word;
      }
    }
  }
  return palindromo;
}

function reverseString(string) {
  // your code here
  return string.split('').reverse().join('');
  // ["H", "o", "l", "a"] -> ["a", "l", "o", "H"] -> "aloH"
}

function isPalindrome(word) {
  // your code here
  return word.length > 1 && word.toLowerCase() === reverseString(word.toLowerCase());
  // true / false
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"
