import { Node } from './node.js';

export class LinkedList {
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

    get isEmpty() {
        return this.#length === 0 || this.#first === null;
    }

    insertLast(value) {
        let newNode = new Node(value);

        if (!this.#first && !this.#last) {
            this.#first = newNode;
            this.#last = newNode;
        } else {
            newNode.setPrev(this.#last);
            this.#last.setNext(newNode);
        }

        this.#last = newNode;

        this.#length += 1;
        newNode = null;

        return this;
    }

    insertFirst(value) {
        let newNode = new Node(value);
        let current = this.#first;

        this.#first = newNode;
        this.#first.setNext(current);
        this.#length += 1;
        newNode = current = null;

        return this;
    }

    removeLast() {
        if (this.isEmpty) {
            throw new Error('List is empty')
        }

        if (this.#length === 1) {
            this.clear();
        } else {
            this.#last.prev.setNext(null);
            this.#last = this.#last.prev;
            this.#length -= 1;
        }
    }

    removeFirst() {
        if (this.isEmpty) {
            throw new Error('List is empty')
        }

        if (this.#length === 1) {
            this.clear();
        } else {
            this.#first.next.setPrev(null);
            this.#first = this.#first.next;
            this.#length -= 1;
        }
    }

    findByValue(value) {
        if (this.isEmpty) {
            throw new Error('List is empty')
        }

        let current = this.#first;

        while (current.value !== value) {
            if (current.next === null) {
              throw new Error('Value not found');
            } else {
                current = current.next;
            }
        }

        return current;
    }

    removeByValue(value) {
        try {
            const nodeToRemove = this.findByValue(value);

            if (nodeToRemove.prev === null) {
              return this.removeFirst();
            }

            if (nodeToRemove.next === null) {
                return this.removeLast();
            }

            nodeToRemove.next.setPrev(nodeToRemove.prev);
            nodeToRemove.prev.setNext(nodeToRemove.next);
            nodeToRemove = null;
            this.#length -= 1;

        } catch (error) {
            console.log(error);
        }
    }

    insertBefore(target, value) {
        try {
            let nodeToInsertBefore = this.findByValue(target);
            let newNode = new Node(value);

            if (nodeToInsertBefore.prev === null) {
                this.#length += 1;
                return this.insertFirst(value);
            }

            nodeToInsertBefore.prev.setNext(newNode);
            newNode.setPrev(nodeToInsertBefore.prev);
            newNode.setNext(nodeToInsertBefore);
            newNode.next.setPrev(newNode);
            nodeToInsertBefore = newNode = null;
            this.#length += 1;

        } catch (error) {
            console.log(error);
        }
    }

    insertAfter(target, value) {
        try {
            let nodeToInsertAfter = this.findByValue(target);
            let newNode = new Node(value);

            if (nodeToInsertAfter.next === null) {
                return this.insertLast(value);
                this.#length += 1;
            }

            nodeToInsertAfter.next.setPrev(newNode);
            newNode.setNext(nodeToInsertAfter.next);
            newNode.setPrev(nodeToInsertAfter);
            newNode.prev.setNext(newNode);
            nodeToInsertAfter = newNode = null;
            this.#length += 1;

        } catch (error) {
            console.log(error);
        }
    }

    replace(target, newValue) {
        try {
          const nodeToreplace = this.findByValue(target);
          nodeToreplace.value = newValue;

        } catch (error) {
            console.log(error);
        }
    }

    reverse() {
        if (this.isEmpty) {
            throw new Error('List is empty')
        }

        if (this.#first === this.#last) {
          return this;
        }

        let currentNode = this.#first;
        let prevNode = null;
        let nextNode = null;

        while (currentNode !== null) {
            prevNode = currentNode.prev;
            nextNode = currentNode.next;

            currentNode.setNext(prevNode);
            currentNode.setPrev(nextNode);

            prevNode = currentNode;
            currentNode = nextNode;
        }

        this.#last = this.#first;
        this.#first = prevNode;

        currentNode = prevNode = nextNode = null;

        return this;
    }

    clear() {
        this.#first = null;
        this.#last = null;
        this.#length = 0;
    }

    convertValuesToString() {
        const nodes = [];
        let currentNode = this.#first;

        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes.map((node) => node.value).toString();
    }

}

const list = new LinkedList();
list.insertLast(1).insertLast(2).insertLast(3);
// console.log(list.convertValuesToString());
// list.reverse();
// console.log('2=>', list.structure);
// list.reverse();
// console.log(list.structure);

// list.insertBefore(2, 5);
// console.log(list.structure);
// list.insertAfter(1, 9);
// console.log(list.structure);
// console.log(list.findByValue());

// console.log(list.removeByValue(3));
// console.log(list.removeLast());
// console.log(list.removeLast());
// console.log(list.length);
// console.log(list.first.value);
// console.log(list.last.value);
// console.log(list.first.next.value);
// console.log(list.first.next.prev.value);
// list.clear();
// console.log(list.structure);
