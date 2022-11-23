import { Node } from './node.js';

class LinkedList {
    #first = null;
    #last = null;
    #length = 0;

    get structure() {
        let node = this.#first;
        let out = 'LinkedList =>';

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

    push(value) {
        const newNode = new Node(value);

        if (!this.#first && !this.#last) {
            this.#first = newNode;
            this.#last = newNode;
        }

        newNode.setPrev(this.#last);

        this.#last.setNext(newNode);
        this.#last = newNode;

        this.#length += 1;
        return this;
    }

    unshift(value) {
        const newNode = new Node(value);
        const current = this.#first;

        this.#first = newNode;
        this.#first.setNext(current);
    }

    pop() {
        this.#last.prev.setNext(null);
        this.#last = this.#last.prev;
    }


    clear() {
        this.#first = null;
        this.#last = null;
        this.#length = 0;
    }
}

const list = new LinkedList();
list.push(1).push(2).push(3);

// console.log(list.structure);             // LinkedList =>  1 => 2 => 3 => NULL
list.unshift(5);
console.log(list.structure);
list.pop();
console.log(list.structure);
list.push(6);
console.log(list.structure);
// console.log(list.length);                // 3
// console.log(list.first.value);           // 1
// console.log(list.last.value);            // 3
// console.log(list.first.next.value);      // 2
// console.log(list.first.next.prev.value); // 1
// list.clear();
// console.log(list.structure);             // LinkedList => NULL
