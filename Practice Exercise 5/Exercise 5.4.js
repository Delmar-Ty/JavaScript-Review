let myTable = [];
let tableDims = {
    rows: 5,
    cols: 5
}
let cells = 0;
for (let i = 0; i < tableDims.rows; i++) {
    let row = [];
    for (let j = 0; j < tableDims.cols; j++) {
        cells++;
        row.push(j);
    }
    myTable.push(row);
}
console.table(myTable);
console.log(`Cell Count: ${cells}`);