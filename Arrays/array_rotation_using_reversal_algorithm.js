//Reversal Algorithm
function ReverseArray(array_Data,start,end){
    while(start < end){
       let temp = array_Data[start];
       array_Data[start] = array_Data[end];
       array_Data[end] = temp;
       start++;
       end--;
    }
}

function leftRotate(array_Data,d,n){
   //base case
   if(d == 0){
     return;
   }
   ReverseArray(array_Data,0,d-1);
   ReverseArray(array_Data,d,n-1);
   ReverseArray(array_Data,0,n-1);
}

leftRotate(array_Data,2,array_Data.length);
console.log(array_Data)