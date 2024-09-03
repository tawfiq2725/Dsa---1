function recursion(n){
    if(n<=1){
        return n
    }
    return recursion(n-2)+recursion(n-1)
}

function toPrint(n){
    let arr = []
    for(let i=0;i<n;i++){
        arr.push(recursion(i))
    }
    return arr
}
console.log(toPrint(6))