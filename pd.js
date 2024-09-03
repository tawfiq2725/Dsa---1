class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.pre = null
    }
}

class Dll{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
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
            node.pre = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    
    insert(value,index){
        const node = new Node(value)
        if(index<0||index>this.size){
            return null
        }
        if(this.isEmpty()){
            this.prepend(value)
        }
        if(index===this.size){
            this.append(value)
        }
        else{
            let curr = this.head
            for(let i=0 ; i<index-1;i++){
                curr = curr.next
            }
            node.next = curr.next
            node.pre = curr
            curr.next.pre = node
            curr.next = node
            this.size++
        }

    }
    removeVal(value){
        if(this.isEmpty()){
            console.log("Empty");
        }
        let remove ;
        if(this.head.value===value){
            remove = this.head
            this.head = this.head.next
        }
        if(this.tail.value===value){
            remove = this.tail
            this.tail = this.tail.pre
        }
        else{
            let curr = this.head
            while(curr){
                curr = curr.next
            }
            remove = curr
            curr.next.pre = curr.pre
            curr.pre.next = curr.next
        }
        this.size--
        return remove.value
    }
    print(){
        if(this.isEmpty()){
            console.log("Empty");    
        }
        else{
            let curr = this.head
            let list = ` `
            while(curr){
                list += `${curr.value} `
                curr = curr.next
            }
            console.log(list)
        }

    }
}


const dll = new Dll()
dll.prepend(10)
dll.prepend(20)
dll.append(30)
dll.insert(66,3)
dll.removeVal(66)
dll.print()