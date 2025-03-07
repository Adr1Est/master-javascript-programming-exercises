function computeCompoundInterest(
  principal,
  interestRate,
  compoundingFrequency,
  timeInYears
) {
  // your code here
  let valor1 = 1 + interestRate / compoundingFrequency;
  let valor2 = valor1 ** (compoundingFrequency * timeInYears);
  let valor3 = principal * valor2;

  return valor3 - principal; //Para obtener el interés generado.
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
