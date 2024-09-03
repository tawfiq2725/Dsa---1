// function string(str){
//     if(str.length=== "" || str.length===1){
//         return str;
//     }
//     return string(str.slice(1))+str[0]
// }
// console.log(string("taw"))


function anagram(s1,s2){
    if(s1.length !== s2.length){
        return null
    }
    const obj1 = {} 
    const obj2 = {} 

    for(let a of s1){
        if(obj1[a]){
            obj1[a]++;
        }
        else{
            obj1[a] = 1;
        }
    }
    for(let a of s2){
        if(obj2[a]){
            obj2[a]++;
        }
        else{
            obj2[a] = 1;
        }
    }
    for(let keys in obj1){
        if(obj1[keys]!==obj2[keys]){
            return false
        }
    }
    return true
}
console.log(anagram('aik','kiai'));
