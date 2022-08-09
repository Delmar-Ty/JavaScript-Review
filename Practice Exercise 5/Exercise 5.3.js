let myWork = [];
for (let i = 0; i < 10; i++) {
    let obj = {};
    let name = `Lesson ${i + 1}`;
    obj.name = name;
    obj.status = ((i + 1) % 2 === 0)? true: false;
    myWork.push(obj);
}
console.log(myWork);