let inventory = [];

let item1 = {
    name: 'Toothbrush',
    model: 'Thin Bristles',
    cost: 5.00,
    quantity: 1
}

let item2 = {
    name: 'Bread',
    model: 'Sourdough',
    cost: 6.00,
    quantity: 1
}

let item3 = {
    name: 'Shampoo',
    model: 'Dandruff',
    cost: 8.00,
    quantity: 1
}

inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[inventory.length - 1].quantity);