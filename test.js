class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Link{
    constructor(){
        this.head = null
        this.size=0
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
            this.head=node
        }
        else{
            let curr = this.head
            while(curr.next){
                curr =curr.next
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
        if(index<0||index>this.size){
            return null
        }
        let removeInd
        if(index===0){
            removeInd = this.head
            this.head = this.head.next
        }
        else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
           
                removeInd = curr.next
                curr.next = removeInd.next
            
        }
        this.size--
        return removeInd.value
    }
    removeValue(value){
        if(this.isEmpty()){
            console.log("Empt");
        }
        let removeVal;
        if(this.head.value===value){
            removeVal = this.head
            this.head = this.head.next
        }
        else{
            let curr = this.head
            while(curr.next && curr.next.value!==value){
                curr =curr.next
            }
            removeVal = curr.next
            curr.next = removeVal.next
        }
        this.size--
        return removeVal
    }
    search(value){
        if(this.isEmpty()){
            console.log("Empt");
        }
        if(this.head.value===value){
            return 0
        }
        else{
            let i=0;
            let cur = this.head
            while(cur){
                if(cur.value===value){
                    return i
                }
                i++
                cur = cur.next
            }
        }
        return null
    }
    reverse(){
        if(this.isEmpty()){
            return null
        }
        else{
            let pre = null
            let cur = this.head
            while(cur){
                let next = cur.next
                cur.next = pre
                pre = cur
                cur = next
            }
            this.head = pre
        }

    }
    print(){
        if(this.isEmpty()){
            console.log("Empt");
        }
        else{
            let cur =this.head;
            let list =' ';
            while(cur){
                list = list + `${cur.value } `;
                cur = cur.next
            }
            console.log(list)
        }
    }
}


const link = new Link()

link.prepend(10)
link.append(20)
link.append(30)
link.append(40)
link.insert(50,4)
link.removeIndex(2)
link.print()