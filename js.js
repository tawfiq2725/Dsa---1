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
        const node = new Node(value)
        if(index<0||index<this.size){
            return null
        }
        if(index===0){
            this.prepend(value)
        }
        else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            return null
        }
        else{
            let curr = this.head
            let list = ` `
            while(curr){
                list = list+`${curr.value} `
                curr = curr.next
            }
            console.log(list)
        }
    }

}

const link = new Link()
link.append(10)
link.append(20)
link.append(30)
link.insert(40,3)
link.print()