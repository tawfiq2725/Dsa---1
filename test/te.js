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
        return this.size === 0
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
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    insert(value,index){
        const node = new Node(value)
        if(index<0 || index>this.size){
            return null
        }
        else if(index === 0 ){
            this.prepend(value)
        }
        else if(index === this.size){
            this.append(value)
        }
        else{
            let current = this.head
            for(let i=0;i<index-1;i++){
                current = current.next
            }
            node.next = current.next
            current.next = node
            this.size++
        }
    }
    delete(index){
        let remove
        if(index<0 || index>this.size){
            return null
        }
        else if(index === 0 ){
            remove  =  this.head
            this.head = this.head.next
        }
        else{
            let current = this.head
            for(let i=0;i<index-1;i++){
                current = current.next
            }
            remove = current.next
            current.next = remove.next
        }
        this.size--
    }
    deleteV(value){
        let remove
        if(value === this.head.value){
            remove = this.head
            this.head = this.head.next
        }
        else{
            let current = this.head
            while(current.next && current.next.value !== value){
                current = current.next
            }
            remove = current.next
            current.next = remove.next
        }
        this.size--
    }
    search(value){
        let current = this.head
        let i=0
        while(current){
            if(value === current.value){
                return i
            }
            i++
            current = current.next
        }
    }
    reverse(){
        let pre = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = pre
            pre = curr
            curr = next
        }
        this.head = pre
    }
    removedup(){
        let values = new Set()
        let pre = null
        let curr = this.head
        while(curr){
            if(values.has(curr.value)){
                pre.next  = curr.next
                this.size--
            }
            else{
                values.add(curr.value)
                pre = curr
            }
        curr = curr.next
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("Empty");
        }
        else{
            let list = ` `
            let current= this.head
            while(current){
                list = list + `${current.value} `
                current = current.next
            }
            console.log(list);
        }
    }

}


const ll = new Link()
ll.prepend(30)
ll.prepend(20)
ll.prepend(10)
ll.append(40)
ll.append(50)
ll.append(60)
ll.append(60)
ll.append(60)
ll.append(60)
ll.append(60)
ll.append(60)
ll.insert(5,0)
ll.insert(65,6)
ll.insert(45,4)
ll.delete(0)
ll.delete(7)
ll.deleteV(10)
console.log(ll.search(65));
ll.reverse()
ll.removedup()
ll.print()