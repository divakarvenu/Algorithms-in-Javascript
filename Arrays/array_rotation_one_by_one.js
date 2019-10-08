//using each element to rotate
let array_Data = [1,3,4,5,6,7,9,10];
let d = 3
let n = array_Data.length;
let temp = [];
for(let i=0;i<d;i++){
  for(let j=0;j<array_Data.length;j++){
        let temp = array_Data[j];
        if(array_Data[j+1]){
            array_Data[j] = array_Data[j+1];
            array_Data[j+1] = temp; 
        }             
  }
}
console.log(array_Data)