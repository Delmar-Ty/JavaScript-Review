let grid = [];
let cells = 64;
let count = 0;
let row = [];
for (let i = 0; i <= 64; i++) {
    if (count % 8 === 0) {
        if (row != undefined) {
            grid.push(row);
        }
        row = [];
    }
    count++;
    let temp = count;
    row.push(temp);
}
console.table(grid);