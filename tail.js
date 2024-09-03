class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Link{
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
            this.head =  node            
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
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log("Rmpt");
        }
        else{
            let curr = this.head
            let list = ''
            while(curr){
                list = list + `${curr.value} `
                curr = curr.next
            }
            console.log(list)
        }
        this.size++
    }

}

const link = new Link()

link.append(10)
link.append(20)
link.append(30)

link.print()