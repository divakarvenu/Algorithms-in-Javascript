//Block swap Algorithm
function swap(arr, start , end, d)  
{  
    let i, temp;  
    for(i = 0; i < d; i++)  
    {  
        temp = arr[start + i];  
        arr[start + i] = arr[end + i];  
        arr[end + i] = temp;  
    }  
}  

function leftRotate(array_Data,d,n){
      let i,j;
      if(d == 0 || d == n){
         return 
      }
      i = d;
      j = n - d;
      //if d equal to half of the array then we just need to do the swap
      while( i !== j){
          /*A is shorter*/
          if(i < j){ 
            swap(array_Data, d-i, d+j-i, i); 
            j -= i; 
          } 
          /*B is shorter*/
          else 
          { 
            swap(array_Data, d-i, d, j); 
            i -= j; 
          } 
      }
      swap(array_Data,d-i,d,i);
}


leftRotate(array_Data,d,n);
console.log(array_Data);