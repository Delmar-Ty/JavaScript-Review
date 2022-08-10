let one = () => console.log('One');
let two = () => console.log('Two');
let three = () => {
    console.log('Three');
    one();
    two();
}
let four = () => {
    console.log('Four');
    three();
    setTimeout(one(), 0);
}
four();