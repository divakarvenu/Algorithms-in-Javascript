let array_Data = [1,3,4,5,6,7,9,10];
let d = 2
let n = array_Data.length;

//cyclically rotate array by one
let lastElement = array_Data.splice(array_Data.length -1 , 1);
array_Data.unshift(lastElement[0]);
console.log(array_Data);
