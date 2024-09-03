class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Link{
    constructor(){
        this.head=null
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
        const node =new Node(value)
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
        let removeIndex;
        if(index===0){
            removeIndex = this.head
            this.head = this.head.next
        }
        else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr= curr.next
            }
            removeIndex = curr.next
            curr.next = removeIndex.next 
        }
        this.size--
        return removeIndex
    }
    removeVal(value){
        if(this.isEmpty()){
            return null
        }
        let remove
        if(this.head.value===value){
            remove = this.head
            this.head = this.head.next
        }
        else{
            let curr = this.head
            while(curr.next && curr.next.value!==value){
                curr =  curr.next
            }
            remove = curr.next
            curr.next = remove.next
            
        }
        this.size--
        return remove
    }
    search(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            return 0
        }
        else{
            let curr = this.head
            let i = 0
            while(curr){
                if(curr.value===value){
                    return i 
                }
                i++
                curr = curr.next
            }
        }
        return false
    }
    reverse(){
        if(this.isEmpty()){
            return null
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
    print(){
        if(this.isEmpty()){
            return null
        }
        else{
            let curr = this.head
            let list = ' ';
            while(curr){
                list = list + `${curr.value} `
                curr = curr.next
            }
            console.log(list)
        }

    }



}



const link= new Link()
link.append(10)
link.append(10)
link.append(20)
link.append(30)
link.append(40)
link.prepend(9)
link.insert(50,2)
link.removeVal(50)
link.removeIndex(2)
console.log(link.search(30))
link.reverse()
link.print()