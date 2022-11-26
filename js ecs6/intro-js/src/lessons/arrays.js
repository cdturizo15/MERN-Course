//Arrays

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1,6,7,8,9,10];
const arr3 = arr2.map(x => x**2);

console.log(arr1);
console.log(arr2);
console.log(arr3);