class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.pre = null;
    }
}

class Dll {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.pre = node;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.pre = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    insert(value, index) {
        const node = new Node(value);
        if (index < 0 || index > this.size) {
            return null;
        }
        if (index === 0) {
            this.prepend(value);
        } else if (index === this.size) {
            this.append(value);
        } else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            node.next = curr.next;
            node.pre = curr;
            curr.next.pre = node;
            curr.next = node;
            this.size++;
        }
    }

    removeIndex(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let remove;

        if (index === 0) {
            // Remove the head
            remove = this.head;
            this.head = this.head.next;
            if (this.head) {
                this.head.pre = null;
            } else {
                this.tail = null; // The list is now empty
            }
        } else if (index === this.size - 1) {
            // Remove the tail
            remove = this.tail;
            this.tail = this.tail.pre;
            if (this.tail) {
                this.tail.next = null;
            } else {
                this.head = null; // The list is now empty
            }
        } else {
            // Remove from the middle
            let curr = this.head;
            for (let i = 0; i < index; i++) {
                curr = curr.next;
            }
            remove = curr;
            curr.pre.next = curr.next;
            curr.next.pre = curr.pre;
        }

        this.size--;
        return remove.value; // Returning the value of the removed node
    }

    print() {
        if (this.isEmpty()) {
            console.log("Empty");
        } else {
            let curr = this.head;
            let list = ``;
            while (curr) {
                list = list + `${curr.value} `;
                curr = curr.next;
            }
            console.log(list);
        }
    }
}

const dll = new Dll();
dll.prepend(30);
dll.prepend(20);
dll.prepend(10);
dll.append(40);
dll.append(50);
dll.append(60);
dll.insert(70, 6);
dll.removeIndex(2);
dll.print();  // Output should be: "10 20 40 50 60 70"
