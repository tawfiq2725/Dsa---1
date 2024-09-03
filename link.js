/*

// Linked List

Linked list is a linear data structure, that includes series of connected node
Each node consist of data value and pointer , and each pointer points on next node

 */

// Disadvantages

// Random access of elements is not feasible and accessing an element has linear time complexity

// It supports 3 operation
/*
1.Insertion 
2.Deletion
3.Search
*/


// Linked List class initialization

class Node{
    constructor(value){
    //constructors are defined using the constructor method within a class.
        this.value = value
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null;
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
            this.head=node
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
            let pre = this.head
            while(pre.next){
                pre = pre.next
            }
            pre.next = node
        }
        this.size++
    }
    insert(value,index){
        if(index<0 || index >this.size){
            return null
        }
        if(index ===0){
            this.prepend(value)
        }
        else{
            const node =new Node(value)
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr =curr.next
            }
            node.next = curr.next
            curr.next = node
            this.size++
        }
    }
    remove(index){
        if(index<0 || index>this.size){
            return null
        }
        let removeindex;
        if(index===0){
            removeindex = this.head
            this.head = this.head.next
        }
        else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr =curr.next
            }
            removeindex = curr.next
            curr.next = removeindex.next
        }
        this.size--
        return removeindex.value
    }
    removevalue(value){
        if(this.isEmpty()){
            return null
        }
        let removevalue
        if(this.head.value===value){
            removevalue = this.head
            this.head = removevalue.next
        }
        else{
            let curr = this.head
            while(curr.next && curr.next.value!==value){
                curr = curr.next
            }
          
                removevalue = curr.next
                curr.next = removevalue.next
            
        }
        this.size--
        return removevalue
    }

    search(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            return 0
        }
        else{
            let i = 0;
            let curr = this.head
            while(curr){
                if(curr.value === value){
                    return i
                }
                i++
                curr  = curr.next
            }
            return null
        }
    }

    reverse(){
        if(this.isEmpty()){
            return null
        }
        else{
            let pre = null
            let curr = this.head
            while(curr){
                let next = curr.next
                curr.next = pre
                pre = curr
                curr  = next 
            }
            this.head = pre
        }
    }
    removeDup(){
        if(this.isEmpty()){
            return null
        }
        else{
            let cur = this.head
            let pre = null
            let values = new Set()
            while(cur){
                if(values.has(cur.value)){
                    pre.next = cur.next;
                    this.size--;
                }
                else{
                    values.add(cur.value)
                    pre = cur
                }
    
            cur = cur.next
            }
        }
    }

    print(){
        if(this.isEmpty()){
            console.log("Empty")
        }
        else{
            let curr = this.head;
            let list = ' '
            while(curr){
                list = list + `${curr.value}`+' '
                curr = curr.next
            }
            console.log(list)
        }
    }

}

const link = new Linkedlist()


link.prepend(10)
link.prepend(20)
link.prepend(30)
link.append(40)
link.append(40)
link.append(40)
link.removeDup()
link.print()