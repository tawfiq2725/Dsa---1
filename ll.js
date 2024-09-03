class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Link{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head=node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
 
    }
    insert(value,index){
        if(index<0 || index>this.size){
            return null
        }
        if(index===0){
            this.prepend(value)
        }
        else{
            const node = new Node(value)
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
        this.size++
    }
    remove(index){
        if(index<0 || index>this.size){
            return null
        }
        let removenode
        if(index===0){
            removenode = this.head
            this.head = this.head.next
        }
        else{
            let cur = this.head
            for(let i=0;i<index-1;i++){
                cur = cur.next
            }
            removenode = cur.next
            cur.next = removenode.next
        }
        this.size--
        return removenode.value
    }
    removeDup(){
        if(this.isEmpty()){
            return null
        }
        else{
            let cur = this.head
            let pre = null
            let values = new Set()
            while(cur){
                if(values.has(cur.value)){
                    pre.next = cur.next
                    this.size--
                }
                else{
                    values.add(cur.value)
                    pre = cur
                }
                cur = cur.next
            }
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("Empty")
        }
        else{
            let curr = this.head
            let list = ' '
            while(curr){
                list = list + `${curr.value} `
                curr = curr.next
            }
            console.log(list)
        }
    }
}

const linkedlist = new Link()
linkedlist.prepend(30)
linkedlist.prepend(20)
linkedlist.prepend(10)
linkedlist.append(40)
linkedlist.append(50)
linkedlist.append(50)
linkedlist.append(50)
linkedlist.append(50)
linkedlist.append(50)
linkedlist.append(50)
linkedlist.append(50)
linkedlist.insert(60,5)
linkedlist.remove(3)
linkedlist.removeDup()
linkedlist.print()