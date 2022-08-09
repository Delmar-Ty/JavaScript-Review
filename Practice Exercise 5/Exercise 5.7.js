let myObj = {
    name: 'me',
    age: `doesn't matter`,
    grade: 12
}
for (const i in myObj) {
    console.log(myObj[i]);
}
let me = ['me', `doesn't matter`, 12];
for (const i of me) {
    console.log(i);
}