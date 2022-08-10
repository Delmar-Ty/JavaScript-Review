let str = '1000';
(() => {
    let str = '2000';
    console.log(str);
})();
let result = (() => {
    let str = '3000';
    return str;
})();
console.log(result, str);
((x) => {
    let str = x;
    console.log(`${str} is my string`);
})('Hello World');