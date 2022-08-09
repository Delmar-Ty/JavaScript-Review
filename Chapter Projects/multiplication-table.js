let multiTable = [];
let value = 12;
for (let i = 1; i <= 12; i++) {
    let row = [];
    for (let j = 1; j <= 12; j++) {
        let product = i * j;
        row.push(product);
    }
    multiTable.push(row);
}
console.table(multiTable);