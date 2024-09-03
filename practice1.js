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
        if(index<0||index>this.size){
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
    removeIndex(index){
        if(index<0 || index>this.size){
            return null
        }
        let remove
        if(index===0){
            remove = this.head
            this.head = this.head.next
        }
        else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            remove = curr.next
            curr.next =remove.next
        }
        this.size--
    }
    removeVal(value){
        if(this.isEmpty()){
            console.log('Empt');
            
        }
        let remove
        if(this.head.value===value){
            remove = this.head
            this.head = this.head.next
        }
        else{
            let curr = this.head
            while(curr.next && curr.next.value !==value){
                curr =curr.next
            }
            remove = curr.next
            curr.next =remove.next
        }
        this.size--
    }
    search(value){
        if(this.isEmpty()){
            console.log("Empt")
        }
        if(this.head.value===value){
            return 0
        }
        else{
            let curr = this.head
            let i=0
            while(curr){
                if(curr.value===value){
                    return i
                }
                i++
                curr = curr.next
            }
            return null
        }
    }
    reverse(){
        if(this.isEmpty()){
            return null;
        }
        else{
            let curr = this.head
            let pre = null
            while(curr){
                let next = curr.next
                curr.next = pre
                pre =curr
                curr = next
            }
            this.head = pre
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("empt")
        }
        else{
            let list = ` `
            let curr = this.head
            while(curr){
                list = list + `${curr.value} `
                curr = curr.next
            }
            console.log(list)
        }
    }

}


const link = new Link()

link.prepend(20)
link.prepend(10)
link.append(30)
link.append(40)
link.append(50)
link.append(60)
link.append(70)
link.removeIndex(5)
console.log(link.search(70))
link.reverse()
link.print()