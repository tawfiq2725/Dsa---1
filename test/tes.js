// // Reverse a string using recursion
// function reverse(str){
//     if(str.length<=0){
//         return null
//     }
//     if(str.length === 1){
//         return str
//     }
//     return reverse(str.slice(1))+str[0];
// }
// console.log(reverse('Taw'));


// Fibonacci

// function Fibonacci(n){
//     let result = [0,1]
//     if(n===0){
//         return n
//     }
//     if(n===1 ){
//         return result
//     }
//     for(let i=2;  i<=n ;i++){
//         result[i] = result[i-1]+result[i-2]
//     }
//     return result
// }
// console.log(Fibonacci(5));



// function Fibonacci(n){
//     if(n<=1){
//         return n
//     }
//     return Fibonacci(n-2)+Fibonacci(n-1)
// }

// function log(limit){
//     for(let i=0;i<=limit;i++){
//         console.log(Fibonacci(i));
//     }
// }

// log(10)


// Palindrome

// function isPalindrome(s){
//     if(s.length === 1){
//         return true
//     }
//     if(s[0] !== s[s.length-1]){
//         return false
//     }
//     return isPalindrome(s.slice(1,-1))
// }
// console.log(isPalindrome('malayalam'));



// let array = [1,1,2,3,4,5,6,7,8,9,5,5,5,5,5,5,5,5,8]

// function occurence(arr){
//     let obj = {}
//     for(let a of arr){
//         if(obj[a]){
//             obj[a]++
//         }
//         else{
//             obj[a] = 1
//         }
//         }
//     let maxOccurNum = 0
//     let maxNumTimes = 0
//     for(let keys in obj){
//         if(obj[keys]>maxNumTimes){
//             maxNumTimes = obj[keys]
//             maxOccurNum = keys
//         }       
//     }
//     return maxOccurNum
// }
// console.log(occurence(array));



// largest Element 

// let array = [1,2,3,4,5,6]

// function largest(arr){
//     let max = arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(max<arr[i]){
//             max = arr[i] 
//         }
//     }
//     return max
// }

// console.log(largest(array));



// second largest

// let array = [2,1,4,7,5,2,8,6]
// function second(arr){
//     let firstL = -Infinity; 
//     let secondL = -Infinity;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>firstL){
//             secondL = firstL
//             firstL = arr[i]
//         }
//         else if(arr[i]>secondL && arr[i]!==firstL){
//             secondL = arr[i]
//         }
//     }
//     return secondL
// }
// console.log(second(array));


// array is sorted or not

// let array = [1,2,3,4,5,6]
// function isSorte(arr){
//     let asc = true
//     let des = true
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]>arr[i-1]){
//             des  = false
//         }
//         else if(arr[i]<arr[i-1]){
//             asc = false
//         }
//     }
//     return asc||des
// }
// console.log(isSorte(array));


// let array =[1,2,3,4,4,5,6,7,8]

// function removeDup(arr){
//     let newArr = []
//     let index =0
//     newArr[index++] = arr[0]
//     for(let i=1;i<=arr.length;i++){
//         if(arr[i] !== arr[i-1]){
//             newArr[index++] =arr[i]  
//         }
//     }
//     return newArr
// }
// console.log(removeDup(array));



// function removeDup(arr){
//     let array = new Set()
//     for(let i=0;i<arr.length;i++){
//         if(array.has(arr[i])){
//             continue
//         }
//         else{
//             array.add(arr[i])
//         }
//     }
//     return array
// }
// console.log(removeDup(array));


// function print(n){
//     if(n<=0){
//         return 
//     }
//     console.log("Print ");
//     return print(n-1)
// }
// print(5)

// function print(name,n){
//     if(name.length<0 || n<0){
//         return
//     }
//     console.log(name);
//     return print(name,n-1)
// }
// print("Tawwwwwww",20)

// function print(n){
//     if(n<=0)
//         return
//     print(n-1)
//         console.log(n);
// }
// print(5)
// function print(n){
//     if(n<=0)
//         return
//     console.log(n);
//     print(n-1)
// }
// print(5)

// function sum(n){
//     if(n<=0)
//         return 0
//     return n+sum(n-1);
// }
// console.log(sum(10));

// function fib(n){
//     let result = [0,1]
//     if(n === 0 ){
//        return [0] 
//     }
//     if(n===1){
//         return result
//     }
//     for(let i=2;i<=n;i++){
//         result[i] = result[i-1]+result[i-2]
//     }
//     return result
// }
// console.log(fac(10));

// function fib(n){
//     if(n<=1){
//         return n
//     }
//     return fib(n-2)+fib(n-1)
// }
// function helper(limit){
//     let arr = []
//     for(let i=0;i<=limit;i++){
//         arr[i] = fib(i)
//     }
//     return arr
// }
// console.log(helper(5));


// function factorial(n){
//     if(n<=0){
//         return 1
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(1));

// function array(arr,start = 0,end = arr.length-1){
//     if(start>=end){
//         return arr
//     }
//     [arr[start],arr[end]] = [arr[end],arr[start]]
//     return array(arr,start+1,end-1)
// }
// console.log(array([1,2,4,5,6]));


// function isPalindrome(str){
//     if(str.length === 1){
//         return true
//     }
//     else if(str[0] !== str[str.length-1] ){
//         return false
//     }
//     return isPalindrome(str.slice(1,-1))
// }
// console.log(isPalindrome('mum'));

// function reverse(str){
//     if(str.length<=1){
//         return str
//     }
//     return reverse(str.slice(1))+str[0]
// }
// console.log(reverse('jkt'));



//Binary search

// function search(array,target){
//     return Binary(array,target,0,array.length-1)         
// }

// function Binary(arr,target,left,right){
//     let mid  = Math.floor((left+right)/2)
//     if(left>right){
//         return -1
//     }
//     if(arr[mid] === target){
//         return mid
//     }
//     if(arr[mid]>target){
//         return Binary(arr,target,left,mid-1)
//     }
//     else{
//         return Binary(arr,target,mid+1,right)
//     }
// }

// console.log(search([1,2,3,4,5],1));


// Binary search

// function binary(arr,target){
//     let left =0 , right = arr.length-1
//     while(left<=right){
//         let mid = Math.floor((left+right)/2)
//         if(arr[mid] === target){
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
// console.log(binary([1,2,3,4,5,6],6));

    