// using temp variable
let array_Data = [1,3,4,5,6,7,9,10];
let d = 3
let n = array_Data.length;
let temp = [];

for(let i=0; i< d ; i++){
    temp.push(array_Data[i]);
}

console.log(array_Data.splice(3,3).concat(temp))