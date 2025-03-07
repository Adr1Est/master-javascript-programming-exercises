let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function isValidArray(arr) {
  return Array.isArray(arr) && arr.length != 0;
}

function renderAverageCostPerDesigner(inventory) {
  // your code here
  let inventario = [];
  let item = {};
  if (isValidArray(inventory)) {

    for (let elem of inventory) { // [{}, {}]
      item = {};
      for (let key in elem) { // Cada elemento del array es un objeto con 2 keys
        // currentInventory[0].name
        //console.log("👽 => " + elem[key]);

        if (key === "name" && !(elem[key] in item)) { item[key] = elem[key]; }
        if (Array.isArray(elem[key])) {
          let suma = 0;
          for (let i = 0; i < elem[key].length; i++) {
            suma += elem[key][i].price;
          }
          item["averagePrice"] = suma / elem[key].length;
        }


      }
      inventario.push(item);
    }
    return inventario;
  }
}

console.log(renderAverageCostPerDesigner(currentInventory));
