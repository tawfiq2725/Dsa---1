class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    remove(index){
        let remove;
        if(index<0 || index>this.size){
            return null
        }
        else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            remove = curr.next
            curr.next = remove.next
        }
        this.size--
    }
    removeMid(){
        let remove
        let curr = this.head
        let mid = Math.floor((0+this.size)/2)
        for(let i=0;i<mid-1;i++){
            curr = curr.next
        }
        remove = curr.next
        curr.next = remove.next
        this.size--
    }
    print(){
        if(this.isEmpty()){
            console.log('Empty');
            
        }
        else{
            let curr = this.head
            let list = ` `
            while(curr){
                list = list + `${curr.value} `
                curr = curr.next
            }
            console.log(list);
            
        }
    }
}

const ll = new LinkedList()
ll.prepend(50)
ll.prepend(40)
ll.prepend(30)
ll.prepend(20)
ll.prepend(10)
ll.removeMid()
ll.print()