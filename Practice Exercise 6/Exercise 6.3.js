let x = 3;
let y = 6;
let op = '-';
function calculate(x, y, op) {
    switch (op) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        default:
            return x + y;
    }
}
console.log(calculate(x, y, op));