class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.pre = null
    }
}

class DLL{
    constructor(){
        this.head = null
        this.tail= null
        this.size = 0
    }

    isEmpty(){
        return this.size===0
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
            this.tail = node
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
        if(this.isEmpty()){
            this.prepend(value)
        }
        if(index===this.size){
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
        if(index<0 || index>=this.size){
            return null;
        }
        let remove;
        if(index===0){
            remove = this.head;
            this.head = this.head.next;
            if(this.head){
                this.head.pre = null;
            }
            else{
                this.tail = null;
            }
        }
        else if(index === this.size-1){
            remove = this.tail;
            this.tail = this.tail.pre;
            if(this.tail){
                this.tail.next = null;
            }
            else{
                this.head = null;
            }
        }
        else{
            let curr = this.head;
            for(let i=0;i<index-1;i++){
                curr = curr.next;
            }
            remove = curr.next;
           curr.next = remove.next
           if (remove.next) {
            remove.next.pre = curr;
        }
        }
        this.size--;
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

const l = new DLL()
l.prepend(10)
l.prepend(20)
l.prepend(30)
l.append(40)
l.append(50)
l.insert(50,5)
l.delete(2)
l.print()