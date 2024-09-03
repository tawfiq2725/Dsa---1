const string = 'hihihihellohellohello'

// function splitStrng(str){
//     let newStrng = str.split('hi')
//     let count = 0
//     for(let i=0;i<newStrng.length;i++){
//         if('' === newStrng[i]){
//             count++
//         }
//     }
//     return count
// }
// console.log(splitStrng(string));
// function splitStrng(str){
//     let newStrng = str.split('hi').length-1
//     return newStrng
// }
// console.log(splitStrng(string));



// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class Link{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         } 
//         else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     isDup(){
//         if(this.isEmpty()){
//             return null
//         }
//         else{
//             let curr = this.head
//             // let pre = null
//             let values = new Set()
//             while(curr){
//                 if(!values.has(curr.value)){
//                     // pre.next = curr.next
//                     // this.size--
//                     values.add(curr.value)
//                 }
//                 curr = curr.next
//             }
//             console.log(values)
//         }
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("Empty");
//         }
//         else{
//             let list =` `
//             let curr = this.head
//             while(curr){
//                 list = list+`${curr.value} `
//                 curr = curr.next
//             } 
//             console.log(list)
//         }
//     }
// }

// const  link = new Link()
// link.prepend(30)
// link.prepend(20)
// link.prepend(10)
// link.prepend(30)
// link.isDup()
// link.print()
// let str1 = 'bat'
// let str2 = 'ttb'
// function isAnagram(s1,s2){
//     if(s1.length !== s2.length){
//         return false
//     }
//     let new1 = s1.toLowerCase().split('').sort().join('')
//     let new2 = s2.toLowerCase().split('').sort().join('')
//     if(new1 === new2){
//         return true
//     }
//     return false
// }
// console.log(isAnagram(str1,str2));
// let str1 = 'Yat'
// let str2 = 'yat'
// let length1 = str1.length
// let length2 = str2.length
// if(length1 !== length2){
//     return false
// }
// function big(str){
//     let newS = str.split(' ')
//     let large = newS[0]
//     for(let i=0;i<newS.length;i++){
//         if(large<newS[i])
//             large = newS[i]
//     }
//     return large
// }
// console.log(big(strn));
// const strng = 'This is a bigggggggggggggggggggggggg string'
// function strn(str){
//     return str.split(' ').reduce((acc,cur)=>acc.length<cur.length?cur:acc)
// }
// console.log(strn(strng));
// let arr = [50,60,70,80,90]
// function zeroAdd(a,n){
//     for(let i=0; i<a.length;i++){
//         if(i===n){
//             a.splice(i-1,1,0)
//         }
//     }
//     return a
// }
// console.log( zeroAdd(arr,1));



// const array = [1,2,3,1,2,3,4,1,5,6,7,10]

// function consec(ar){
//     let arr = []
//     for(let i=0;i<ar.length;i++){
//         if(arr.includes(ar[i])){
//             arr = []
//         }
//         arr.push(ar[i])
//     }
//     return arr
// }
// console.log(consec(array));





const array = [1, 2, 3, 0, 534, 0, 43, 0, 23, 32, 0, 332 ]

function func(ar){
    let arrr = []
    let count = 0
    for(let i=0;i<ar.length;i++){
        if(ar[i]!==0){
            arrr.push(ar[i])
        }
        count++
    }
    if(count>=1){
        for(let j=1;j<=count;j++){
            arrr.push(0)
        }
    }
    return arrr
}
console.log(func(array));


console.log(array);









