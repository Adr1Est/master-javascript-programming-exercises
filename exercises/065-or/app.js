function or(expression1, expression2) {
  // your code here
  if (!expression1 && expression2 != false) {
    return true;
  } else if (expression1 != false && !expression2) {
    return true;
  } else if (expression1 != false && expression2 != false) {
    return true;
  } else {
    return false;
  }
  /*return !(!expression1 && !expression2);*/
}

let output = or(true, false);
console.log(output); // --> true;
