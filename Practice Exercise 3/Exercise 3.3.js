let arr1 = [1, 2, 3];
let arr2 = [];
arr2.push(arr1, arr1, arr1);
console.log(arr2);
console.log(arr2[0][1], arr2[1][1], arr2[2][1]);