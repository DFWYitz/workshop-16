const groceryList = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

//logNames
groceryList.forEach((itemName) => {
  console.log(itemName.name);
})

//getUppercaseNames
const caps = (list) => {
  return list.map((itemCaps) => {
    return itemCaps.name.toUpperCase()

  })
}
console.log (caps (groceryList))


//getItemById
const getItemById = (number, items) => {
return items.find ((grocery) => grocery.id === number); 
}
//console.log(getItemById(4,groceryList));
  for (let index = 1; index<9; index +=1 ){console.log(getItemById(4,groceryList));}

//getItemPriceByName
//getItemsByCategory
//countItems
//calculateTotalPrice