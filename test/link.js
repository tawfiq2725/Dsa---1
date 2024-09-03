class Node{
    constructor(value){
        this.value = value;
        this.next =  null;
    }
}

class SLL{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size===0
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
            while(curr.next!== null){
                curr = curr.next
            }
            curr.next =node
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
        else if(index===this.size){
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
    remove(index){
        let remove
        if(index<0 || index>this.size){
            return null
        }
        else if(index===0){
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
    delete(value){
        let remove
        if(this.head.value === value){
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
    }
    reverse(){
        if(this.isEmpty()){
            console.log("Empt")
        }
        else{
            let curr =  this.head
            let pre = null
            while(curr){
                let next  =  curr.next
                curr.next  = pre
                pre = curr
                curr = next
            }
            this.head =pre
        }
    }
    removeDup(){
        if(this.isEmpty()){
            return null
        }
        else{
            let curr = this.head
            let pre = null
            let values = new Set()
            while(curr){
                if(values.has(curr.value)){
                    pre.next = curr.next
                    this.size--
                }
                else{
                    values.add(curr.value)
                    pre = curr
                }
                curr = curr.next
            }
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("Empty list");
        }
        else{
            let current = this.head
            let lists = ` `
            while(current){
                lists = lists + `${current.value} `
                current = current.next
            }
            console.log(lists)
        }
    }

}

const sll = new SLL()
sll.prepend(30)
sll.prepend(30)
sll.prepend(20)
sll.prepend(20)
sll.prepend(10)
sll.prepend(10)
sll.append(40)
sll.append(40)
sll.append(50)
sll.append(50)
sll.append(50)
sll.append(50)
sll.append(50)
sll.append(50)
sll.append(50)
sll.insert(5,0)
sll.insert(55,6)
sll.insert(35,4)
console.log(sll.search(40));
sll.reverse()
sll.removeDup()
// sll.remove(0)
// sll.remove(6)
// sll.remove(3)
sll.print()