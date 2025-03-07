function transformEmployeeData(array) {
  // your code here
  let empleados = [];
  for (let empl of array) {
    let obj = {}
    //console.log(empl);
    for (let categoria of empl) {
      obj[categoria[0]] = categoria[1];
      console.log(obj);
    }
    empleados.push(obj);
  }
  return empleados;
}

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output);