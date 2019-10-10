//Search an element in a sorted and rotated array
let array_Data = [3,4,5,1,2];
let element = 1;

let binarySearch = (array,low,high,key) => {
    if(high < low){
      return -1 //no element found base case 
    }
    let mid = Math.floor((low + high) / 2); //find mid
    if(array[mid] == key){ 
        return mid;
    }
    else if(key > array[mid]){
      return binarySearch(array,(mid + 1),high,key);
    }
    else if(key < array[mid]){
      return binarySearch(array,low,(mid-1),key);
    }
}

let findPivot = (arr,low,high) => {
    //base case [4,5,1,2,3]
    if(high < low){
      return -1;
    } 
    if(high === low){
      return low;
    }
    let mid = Math.floor((low + high) / 2);  //2
    if(mid < high && arr[mid] > arr[mid +1]){   
       return mid;
    }
    else if(mid > low && arr[mid] < arr[mid - 1]){
        return mid+1;
    }
    else if (arr[low] >= arr[mid]) {
        return findPivot(arr, low, mid-1); 
    }    
}

let pivotSearch = (arr,n,key) =>{
    //first find whether array rotated or not
    let pivot = findPivot(arr,0,n-1);
    if(pivot == -1){
       return binarySearch(arr,0,n-1,key); //not rotated at all
    }
    if(arr[pivot] == key){
      return pivot;
    }
    if(arr[0] <= key){
        return binarySearch(arr,0,pivot-1,key);
    }else{
        return binarySearch(arr,pivot+1,n-1,key);
    }
}

console.log(pivotSearch(array_Data,array_Data.length,2))