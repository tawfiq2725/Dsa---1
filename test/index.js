const array = [1,3,5,7,9,11]
//  create a function 2 args , arr ,targ .  
//  output if the value of target is exisg in the array it will true , other wise false

function searchTarget(array,target){
    let left = 0
    let right = array.length-1
    while(left<=right){
        let middleIndex = Math.floor(left+right/2)
        console.log(middleIndex)
        if(array[middleIndex]===target){
            return middleIndex
        }
        else if(array[middleIndex]<target){
            left = middleIndex+1
        }
        else{
            right = middleIndex-1
        }
    }
    }
console.log(searchTarget(array,11))



// 0 , 1, 1, 2, 3, 5, 8, 13, ..
// Print first 6 numbers in fib serious
// function fibonacci(n){
//     let arr = []
//     if(n<=1){
//         return 1
//     }
//     if(arr.length==)
//     return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(0))








