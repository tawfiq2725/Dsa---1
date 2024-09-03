class Node{
    constructor(value){
        this.value = value
        this.next = null;
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
    getsize(){
        return this.size
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
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head= node
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
        if(index<0||index>this.size){
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
            this.size++
        }
    }
    remove(index){
        if(index<0||index>this.size){
            return null
        }
        let removenode
        if(index===0){
            removenode = this.head
            this.head = this.head.next
        }
        else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            removenode = curr.next 
            curr.next = removenode.next 
        }
        this.size--
        return removenode.value
    }
    print(){
        if(this.isEmpty()){
            console.log("empty")
        }
        else{
            let curr = this.head
            let lists = " "
            while(curr){
                lists = lists + `${curr.value} `
                curr = curr.next
            }
            console.log(lists)
        }
    }
}


const link = new Link()

link.append(10)
link.append(20)
link.append(30)
link.append(40)
link.append(50)

link.insert(35,3)
link.remove(0)

link.print()