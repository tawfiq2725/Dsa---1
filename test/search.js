
// function binarySearch(arr,target){
    //     let left = 0;
//     let right = arr.length-1;
//     while(left<=right){
//         let middle = Math.floor((left+right)/2)
//         if(arr[middle]===target){
//             return middle;
//         }
//         else if(arr[middle]<target){
//             left = middle + 1;
//         }
//         else{
//             right = middle-1;
//         }
//     }
//     return null;
// }
// console.log(binarySearch(arrayd,6))
const array= [1,2,3,4,5,6,7,8,9]

// function search(arr,target){
//     return binary(arr,target,0,arr.length-1)
// }

// function binary(array,target,left,right){
//     if(left>right){
//         return null
//     }
//     let mid = Math.floor((left+right)/2)
//     if(array[mid]===target){
//         return mid
//     }
//     else if(target<array[mid]){
//         return binary(array,target,left,mid-1)
//     }
//     else{
//         return binary(array,target,mid+1,right)
//     }
// }
// console.log(search(array,8))