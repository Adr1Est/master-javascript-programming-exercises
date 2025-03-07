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

function renderInventory(inventory) {
  // your code here
  // hint: before you just dive into coding...
  // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
  let inventario = [];
  let marca;
  if (isValidArray(inventory)) {

    for (let elem of inventory) { // [{}, {}]

      for (let key in elem) { // Cada elemento del array es un objeto con 2 keys
        // currentInventory[0].name
        //console.log("👽" + elem[key]);
        let auxArr = [];
        if (typeof elem[key] === "string") {
          marca = elem[key];
        } else {

          for (let model of elem[key]) {
            auxArr = [];
            auxArr.push(marca); //["Gucci"]
            for (let caracteristica in model) {

              auxArr.push(model[caracteristica]);
            }
            inventario.push(auxArr);
          }

        }
      }

    }
    return inventario;
  }
}

console.log(renderInventory(currentInventory))

/*
[
  ['Brunello Cucinelli', 'tasselled black low-top lace-up', 1000],
  ['Brunello Cucinelli', 'tasselled green low-top lace-up', 1100],
  ...
]
*/