let array = [];
function add(x, y) {
    return x + y;
}
for (let i = 0; i < 10; i++) {
    let x = i * 5;
    let y = i * i;
    array.push(add(x, y));
}
console.log(array);