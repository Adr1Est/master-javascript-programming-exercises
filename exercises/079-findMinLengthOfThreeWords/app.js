// Write your function here
function findMinLengthOfThreeWords(str, str2, str3) {
  if (str.length < str2.length && str.length < str3.length) {
    return str.length;
  } else if (str2.length < str.length && str2.length < str3.length) {
    return str2.length;
  } else {
    return str3.length;
  }
  /*let minLength = Math.min(word1.length, word2.length, word3.length);
    return minLength;*/
}