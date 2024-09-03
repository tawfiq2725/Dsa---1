class Node{
    constructor(value){
        this.value = value;
        this.next  = null;
        this.pre = null;
    }
}

class Dll{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size===0
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail =node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node;
            this.tail=node; 
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
        if(index<0 || index>this.size){
            return null
        }
        else if(this.isEmpty()){
            this.prepend(value)
        }
        else if(index===this.size){
            this.append(value)
        }
        else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            node.next = curr.next
            node.pre = curr
            curr.next.pre = node
            curr.next = node
            this.size++
        }
    }
    delete(index){
        let remove;
        if(index<0 || index>=this.size){
            return null
        }
        else if(index===0){
            remove = this.head
            this.head = this.head.next
            if(this.head){
                this.head.pre = null
            }
            else{
                this.tail = null
            }
        }
        else if(index === this.size){
            remove = this.tail
            this.tail.pre = this.tail
            if(this.tail){
                this.tail.next = null
            }
            else{
                this.head = null
            }
        }

        else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            remove = curr.next
            curr.next  = remove.next
            if(remove.next){
                remove.next.pre = curr
            }
        }
        this.size--
    }
    print(){
        if(this.isEmpty()){
            console.log("Empty list");
        }
        else{
            let current = this.head
            let lists = ` `
            while(current){
                lists = lists + `${current.value} `
                current = current.next
            }
            console.log(lists)
        }
    }
}

const dll = new Dll()
dll.prepend(10)
dll.append(20)
dll.insert(30,2)
dll.append(50)
dll.append(30)
dll.append(40)
dll.append(50)
dll.delete(0)
dll.delete(5)
dll.delete(3)



dll.print()