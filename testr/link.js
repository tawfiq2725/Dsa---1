class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class Link{
    constructor(){
        this.head = null
        this.size= null
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
        if(index<0 || index>this.size){
            return null
        }
        else if(index===0){
            this.prepend(value)
        }
        else if(index === this.size){
            this.append(value)
        }
        else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
            this.size++
        }
    }
    removeIndex(index){
        let remove;
        if(index<0 || index>this.size){
            return null
        }
        else if(index === 0 ){
            remove = this.head
            this.head = this.head.next
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
    removeVal(value){
        let remove;
        if(value === this.head.value){
            remove = this.head
            this.head = this.head.next
        }
        else{
            let curr = this.head
            while(curr.next && curr.next.value !== value){
                curr = curr.next
            }
            remove = curr.next
            curr.next = remove.next
        }
        this.size--
    }
    search(value){
        if(this.isEmpty()){
            console.log("Empty");
        }
        else{
            let curr = this.head
            let i=0
            while(curr){
                if(curr.value === value){
                    return i
                }
                i++
                curr = curr.next
            }
        }
    }
    reverse(){
        if(this.isEmpty()){
            console.log("Empty");
            
        }
        else{
            let curr = this.head
            let pre = null
            while(curr){
                let next = curr.next
                curr.next = pre
                pre = curr
                curr = next
            }
            this.head = pre
        }
    }
    removeDup(){
        if(this.isEmpty()){
            console.log("Empty");
            
        }
        else{
            let curr = this.head
            let pre = null
            let value = new Set()
            while(curr){
                if(value.has(curr.value)){
                    pre.next = curr.next
                    this.size--
                }
                else{
                    value.add(curr.value)
                    pre = curr
                }
                curr =curr.next
            }
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("Empty");
        }
        else{
            let list =` `
            let curr = this.head
            while(curr){
                list = list+`${curr.value} `
                curr = curr.next
            } 
            console.log(list)
        }
    }
}


const link = new Link()
link.prepend(30)
link.prepend(20)
link.prepend(10)
link.append(40)
link.insert(50,4)
link.insert(50,0)
link.insert(50,3)
// link.removeIndex(0)
// link.removeIndex(2)
// link.removeVal(50)
// link.removeVal(50)
// link.removeVal(50)
// link.removeVal(30)
console.log(link.search(40))
link.reverse()
link.removeDup()
link.print()