class Node{
    constructor(value){
        this.value = value;
        this.next =null
    }
}

class Linkedlist{
    constructor(){
        this.head =null
        this.size = 0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }
    // o(1)
    prepend(value){
        const node1 = new Node(value);
        if(this.isEmpty()){
             this.head=node1
        }
        else{
            node1.next = this.head
            this.head = node1
        }
        this.size++
    }
    // o(n)
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            let pre = this.head
            while(pre.next){
                pre = pre.next
            }
            pre.next = node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log("Empty")
        }
        else{
            let cur = this.head
            let list = ' '
            while(cur){
                list = list + `${cur.value}` + ` `
                cur = cur.next
            }
            console.log(list)
        }
    }
}
const link = new Linkedlist()


link.append(10)
link.append(20)
link.append(30)
link.append(40)


link.print()