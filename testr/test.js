// Write a recursive function to check if a given string is a palindrome


// function recursive(s1){
//     if(s1.length<=1){
//         return s1
//     }
//     let first = recursive(s1.slice(1))+s1.charAt[0]
//     if(first!==s1){
//         return false
//     }
//     return true
// }
// console.log(recursive('malayalam'))






// write a program to find the second largest from an array without using any predefined methods


function secondLargest(array){
    let largeNumber = 0
    let secondLarge = 0
    for(let i=0;i<array.length;i++){
        if(largeNumber<array[i]){
            largeNumber = array[i]
        }
        if(largeNumber>secondLarge){
            largeNumber = array[i]
        }
        if(largeNumber){
            secondLarge = largeNumber
        }
    }
}
console.log(secondLargest([1,4,2,3,9,7,6]))