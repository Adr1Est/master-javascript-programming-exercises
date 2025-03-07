let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function isValidArray(arr) {
  return Array.isArray(arr) && arr.length != 0;
}

function renderInventory(shoeList) {
  // your code here
  let blackshoes = [];
  if (isValidArray(shoeList)) {

    for (let elem of shoeList) { // [{}, {}]
      let marca;
      for (let key in elem) { // Cada elemento del array es un objeto con 2 keys
        // currentInventory[0].name
        //console.log("👽 => " + elem[key]);
        if (key === "name") { marca = elem[key]; }
        if (Array.isArray(elem[key])) {
          for (let model of elem[key]) {
            let checkblack = model.name.split(" ");
            let auxArr = [];
            for (let x of checkblack) {
              auxArr = [];
              if (x === "black") {
                checkblack = checkblack.join(" ");
                auxArr.push(marca);
                auxArr.push(checkblack);
                auxArr.push(model.price);
              }
              if (auxArr.length > 0) {
                blackshoes.push(auxArr);
              }
            }
          }
        }
      }
    }
    return blackshoes;
  }
}

console.log(renderInventory(currentInventory));
