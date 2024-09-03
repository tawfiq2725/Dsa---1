// let string = "This is a longest wordddddddddddddddd everrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"

// function longesst(str){
//     let cur = ''
//     let large = ''
//     for(let i=0;i<str.length;i++){
//         if(i===str.length || str[i] === ' '){
//             if(cur.length>large.length){
//                 large = cur
//             }
//             cur = ''
//         }
//         else{
//             cur = cur+str[i]
//         }
//     }
//     if(cur.length>large.length){
//         large = cur
//     }
//     return large
// }
// console.log(longesst(string));



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
//         return this.size === 0
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
//     removeDup(){
//         if(this.isEmpty()){
//             console.log("Empty");
            
//         }
//         else{
//             let cur = this.head
//             let pre = null
//             let values = new Set()
//             while(cur){
//                 if(values.has(cur.value)){
//                     pre.next =cur.next
//                     this.size--
//                 }
//                 else{
//                     values.add(cur.value)
//                     pre = cur
//                 }
//                 cur = cur.next
//             }
//         }
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("Empty");
            
//         }
//         else{
//             let cur = this.head
//             let list = ` `
//             while(cur){
//                 list = list+`${cur.value} `
//                 cur = cur.next
//             }
//             console.log(list);
//         }
//     }

// }


// const ll = new Link()
// ll.prepend(40)
// ll.prepend(30)
// ll.prepend(20)
// ll.prepend(10)
// ll.prepend(10)
// ll.prepend(10)
// ll.prepend(10)
// ll.prepend(10)
// ll.prepend(10)
// ll.prepend(10)
// ll.removeDup()
// ll.print()



function nonrepeat(str){
    let ob = {}
    for(let a of str){
        if(ob[a]){
            ob[a]++
        }
        else{
            ob[a] = 1
        }
    }

    for(let keys in ob){
        if(ob[keys]===1){
            return keys
        }
    }
}
console.log(nonrepeat('aaabgbcc'));
