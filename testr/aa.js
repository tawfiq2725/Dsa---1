// function isAnagram(s1,s2){
//     if(s1.length !== s2.length){
//         return false
//     }
//     let new1 = s1.toLowerCase()
//     let new2 = s2.toLowerCase()
    
//     let obj1 = {}
//     let obj2 = {}

//     for(let a of new1){
//         obj1[a] = (obj1[a] || 0)+1
//     }
//     for(let a of new2){
//         obj2[a] = (obj2[a] || 0)+1
//     }

//     for(let key in obj1){
//         if(obj1[key] !== obj2[key]){
//             return false
//         }
//     }
//     return true

// }
// console.log(isAnagram('sat','TsA'));









function isAnagram(s1,s2){
    if(s1.length !== s2.length){
        return false
    }

    let new1 = s1.toLowerCase()
    let new2 = s2.toLowerCase()

    let obj1 = {}
    let obj2 = {}

    for(let a of new1){
        obj1[a] = (obj1[a] || 0)+ 1
    }
    for(let a of new2){
        obj2[a] = (obj2[a] || 0)+ 1
    }

    for(let key in obj1){
        if(obj1[key] !== obj2[key]){
            return false
        }
    }
    return true
}
console.log(isAnagram('sat','xts'));
