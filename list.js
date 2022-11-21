import { Node } from './node.js';

class LinkedList {
    #first = null;
    #last = null;
    #length = 0;

    get list() {
        let node = this.#first;
        let out = 'LinkedList => ';
        while (node) {
            out += ` ${node.value} =>`;
            node = node.next;
        }

        out += ' NULL';

        return out;
    }

    get length() {
        return this.#length;
    }

    get first() {
        return this.#first;
    }

    get last() {
        return this.#last;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.#first) {
            this.#first = newNode;
        }

        newNode.setPrev(this.#last);

        if (this.#last) {
            this.#last.setNext(newNode);
        }

        this.#last = newNode;
        this.#length += 1;
    }

    // clear() {
    //
    // }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log(list.list);                  // LinkedList =>  1 => 2 => 3 => NULL
console.log(list.length);                // 3
console.log(list.first.value);           // 1
console.log(list.last.value);            // 3
console.log(list.first.next.value);      // 2
console.log(list.first.next.prev.value); // 1
