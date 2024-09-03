class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}


class DoubleLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size===0
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
            this.head.prev = node
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }
        else{
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    insert(value,index){
        const node = new Node(value)
        if(index<0 || index>this.size){
            return null
        }
        else if(index===0){
            this.prepend(value)
        }
        else if(index===this.size){
            this.append(value)
        }
        else{
            let current = this.head
            for(let i=0;i<index-1;i++){
                current = current.next
            }
            node.next = current.next;
            node.prev = current;
            current.next.prev = node;
            current.next = node;        }
        this.size++

    }
    print(){
        if(this.isEmpty()){
            console.log('Empt')
        }
        else{
            let current = this.head
            let list = ``
            while(current){
                list = list+`${current.value} `
                current = current.next
            }
            console.log(list)
        }
    }
}

const dll = new DoubleLinkedList()
dll.prepend(10)
dll.prepend(20)
dll.prepend(30)
dll.append(40)
dll.append(50)
dll.append(60)
dll.append(70)
dll.insert(80,1)
dll.print()