const array = ['Ice', 'Cream', 'Chacolate', 'Candies']

// function longestSrng(array){
//     return array.reduce((acc,cur)=>{
//         return acc.length>cur.length?acc:cur
//     })
// }
// console.log(longestSrng(array))


// function IterativeApproach(array){
//     let longestSrng = ''
//     for(let i=0;i<array.length;i++){
//         if(longestSrng.length<array[i].length){
//             longestSrng = array[i]
//         }
//     }
//     return longestSrng
// }
// console.log(IterativeApproach(array))


const str1 = "Tawfiq Sirajudeen is a btech graduate student"

// function myMethod(str){
//     return str.split(" ").reduce((acc,cur)=>acc.length>cur.length?acc:cur)
// }
// console.log(myMethod(str1))

// function withoutM(str){
//     let currentWord = ''
//     let largeWord = ''
//     for(let i=0;i<str.length;i++){
//         if(str[i]=== ' ' || i===str.length){
//             if(currentWord.length>largeWord.length){
//                 largeWord = currentWord
//             }
//             currentWord = ''
//         }
//         else{
//             currentWord = currentWord + str[i]
//         }
//     }
//     return largeWord
// }
// console.log(withoutM(str1))



// const arrayNum = [1,1,2,2,3,4,5,6,7,7]

// function removeDuplicates(arr){
//     let seenVal = new Set()
//     for(let i=0;i<arr.length;i++){
//         if(seenVal.has(arr[i])){
//             continue
//         }
//         else{
//             seenVal.add(arr[i])
//         }
//     }
//     return seenVal
// }
// console.log(removeDuplicates(arrayNum))



// const twoD = [[1,2,3],[4,5,6]]

// let newArr = twoD.flat()
// console.log(newArr);



// // firstNonrepeat
// let string = 'een'
// function firstNonrepeat(str){
//     let obj = {}
//     for(let s of str){
//         if(obj[s]){
//             obj[s]++
//         }
//         else{
//             obj[s] = 1
//         }
//     }
//     for(let k in obj){
//         if(obj[k]===1){
//             return k
//         }
//     }
//     return null
// }
// console.log(firstNonrepeat(string))


// function fibonacci(n){
//     if(n<2){
//         return n
//     }
//     return fibonacci(n-1)+ fibonacci(n-2)    
// }
// console.log(fibonacci(6))


// function fibonacci(n){
//     let arrF = []
//     for(let i=0;i<n;i++){
//         if(i===0 || i===1){
//             arrF.push(i)
//         }
//         else{
//             arrF.push(arrF[i-1]+arrF[i-2])
//         }
//     }
//     return arrF
// }
// console.log(fibonacci(5))



// function isAnagram(s1,s2){
//     if(s1.length !== s2.length){
//         return false
//     }
//     let obj1 = {}
//     let obj2 = {} 
//     for(let s of s1){
//         if(obj1[s]){
//             obj1[s]++
//         }
//         else{
//             obj1[s] = 1
//         }
//     }
//     for(let s of s2){
//         if(obj2[s]){
//             obj2[s]++
//         }
//         else{
//             obj2[s] = 1
//         }
//     }
//     for(let char in obj1){
//         if(obj1[char]!==obj2[char]){
//             return false
//         }
//     }
//     return true
// }
// console.log(isAnagram("true","rtte"))



// function fib(s){
//     let arr = []
//     for(let i=0 ; i<s ; i++){
//         if(i===0 || i===1){
//             arr.push(i)
//         }
//         else{
//             arr.push(arr[i-2]+arr[i-1])
//         }
//     }
//     return arr
// }
// console.log(fib(20))



// function maxOccur(arr){
//     let obj = {}
//     for(let a of arr){
//         if(obj[a]){
//             obj[a]++
//         }
//         else{
//             obj[a] = 1
//         }
//     }
//     let maxOcc = null
//     let maxTimes = 0

//     for(let a in obj){
//         if(obj[a]>maxTimes){
//             maxTimes = obj[a]
//             maxOcc = a
//         }
//     }

//     return [ maxOcc , maxTimes ]
// }

// console.log(maxOccur(['a','a','d','j','k','i','z','s']))


// reverse strng

// function reverseString(str){
//     if(str.length<=1){
//         return str
//     }
//     return reverseString(str.substring(1))+str.charAt(0)    
// }
// console.log(reverseString("Taw"))