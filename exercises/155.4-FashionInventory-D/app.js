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

function getLaceNameDataForShoes(inventory) {
  // your code here
  let auxArr = [];
  if (isValidArray(inventory)) {
    inventory.map((e) => {
      e.shoes.map((model) => {
        let contador = 0;
        let myWords = model.name.split(" ");
        myWords.map((word) => {
          if (word.startsWith("lace")) {
            auxArr.push({
              nameWords: myWords,
              targetWordIndex: contador
            });
          } else {
            contador++;
          }
        });
      });
    });
  }
  return auxArr;
}

console.log(getLaceNameDataForShoes(currentInventory));
