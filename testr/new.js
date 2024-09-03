let array = [-1,-4,-3,-8,-6,-5,-7]
// function secondLargest(arr){
//     let firstL = -Infinity
//     let seconL = -Infinity

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>firstL){
//             seconL = firstL
//             firstL =arr[i]
//         }
//         else if(arr[i]>seconL && arr[i]!==firstL){
//             seconL =arr[i]
//         }
//     }
//     return seconL
// }


// console.log(secondLargest(array))



// function secondLargest(arr){
//     let firstBig = -Infinity
//     let secondBig = -Infinity

//     for(let i=0 ; i<arr.length;i++){
//         if(arr[i]>firstBig){
//             secondBig = firstBig
//             firstBig = arr[i]
//         }
//         else if(arr[i]>secondBig && arr[i]!==firstBig){
//             secondBig = arr[i]
//         }
//     }
//     return secondBig
// }

// console.log(secondLargest(array))




// function isPalindrome(str){
//     // Base case
//     if(str.length === 1){
//         return true
//     }
//     if(str[0] !== str[str.length-1]){
//         return false
//     }
//     // Recursive case
//     return isPalindrome(str.slice(1,str.length-1))
// }

// console.log(isPalindrome('malm'))



// function secondLargest(arr){
//     let nrwA = arr.sort((a,b)=>b-a)
//     return nrwA[1]
// }
// console.log(secondLargest([1,2,6,5,37,78,63]))




// Binary search without recursion

// function Binary(arr,target){
//     let left = 0
//     let right = arr.length-1
//     while(left<=right){
//         let mid = Math.floor((left+right)/2)
//         if(arr[mid]===target){
//             return mid
//         }
//         else if(arr[mid]>target){
//             right = mid-1
//         }
//         else{
//             left = mid+1
//         }
//     }
//     return -1
// }
// console.log(Binary([1,2,3,4,5,6,7],5));



// Binary search using recursion

// function Binary(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,left,right){
//     let mid = Math.floor((left+right)/2);
//     if(left>right){
//         return null
//     }
//     else if(arr[mid]===target){
//         return mid
//     }
//     else if(arr[mid]>target){
//         return search(arr,target,left,mid-1)
//     }
//     else{
//         return search(arr,target,mid+1,right)
//     }
// }
// console.log(Binary([1,2,3,4,5,6,7,8,9],9))




// Whether the array is sorted or not

// function isSorted(arr){
//     let ascending = true
//     let descending = true
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<arr[i-1]){
//             ascending = false
//         }
//         else if(arr[i]>arr[i-1]){
//             descending =false
//         }
//     }
//     return ascending||descending
// }

// console.log(isSorted([1,2,3,4,5]))



// function isAnagram(s1,s2){
//     if(s1.length !== s2.length){
//         return false
//     }
//     let obj1 = {}
//     let obj2 = {}

//     for(let a of s1){
//         if(obj1[a]){
//             obj1[a]++
//         }
//         else{
//             obj1[a] = 1
//         }
//     }
//     for(let a of s2){
//         if(obj2[a] ){
//             obj2[a]++
//         }
//         else{
//             obj2[a] = 1
//         }
//     }

//     for(let keys in obj1){
//         if(obj1[keys] === obj2[keys]){
//             return true
//         }
//     }
//     return false
// }

// console.log(isAnagram('str','rts'));


// function factorial(n){
//     if(n<=1){
//         return 1
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(1));

// function factorial(n){
//     if(n===0 || n===1){
//         return 1
//     }
//     let result = 1
//     for(let i=2;i<=n;i++){
//         result = result*i
//     }
//     return result
// }
// console.log(factorial(1))

// function fibonacci(n){
//     if(n<=1){
//         return n
//     }
//     return fibonacci(n-2)+fibonacci(n-1)
// }
// console.log(fibonacci(45));

// function fibonacci(n){
//     if(n===0){
//         return [n]
//     }
//     let fib = [0,1]
//     for(let i=2 ;i<=n;i++){
//         fib[i] = fib[i-2] + fib[i-1]
//     }
//     return fib
// }
// console.log(fibonacci(3));

// function isPalindrome(str){
//     if(str.length ===0){
//         return false
//     }
//     if(str.length === 1){
//         return true
//     }
//     if(str[0] !== str[str.length-1]){
//         return false
//     }
//     return isPalindrome(str.slice(1,-1))
// }

// console.log(isPalindrome('malayelam'))



function mergeArray(arr1,arr2){
    let mergeArray = []
    for(let i=0;i<arr1.length;i++){
        mergeArray[mergeArray.length] = arr1[i]
    }
    for(let i=0;i<arr2.length;i++){
        mergeArray[mergeArray.length] = arr2[i]
    }
    return mergeArray
}
console.log(mergeArray([1,2,3],[4,5,6]));
