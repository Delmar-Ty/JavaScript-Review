let myArr = [];
for (let i = 0; i <= 10; i++) {
    myArr[i] = i;
}
console.log(myArr);
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}
for (let i of myArr) {
    console.log(i);
}