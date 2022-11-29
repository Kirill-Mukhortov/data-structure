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

    get isEmpty() {
        return this.#length === 0 || this.#first === null;
    }

    // Вставка в конец
    push(value) {
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

    // Вставка в начало
    unshift(value) {
        let newNode = new Node(value);
        let current = this.#first;

        this.#first = newNode;
        this.#first.setNext(current);
        this.#length += 1;
        newNode = current = null;

        return this;
    }

    // Удаление последнего элемента
    pop() {
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

    // Удаление первого элемента
    shift() {
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

    // Поиск элемента по значению
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

    // Удаление элемента по значению
    removeByValue(value) {
        try {
            const nodeToRemove = this.findByValue(value);

            if (nodeToRemove.prev === null) {
              return this.shift();
            }

            if (nodeToRemove.next === null) {
                return this.pop();
            }

            nodeToRemove.next.setPrev(nodeToRemove.prev);
            nodeToRemove.prev.setNext(nodeToRemove.next);
            nodeToRemove = null;
            this.#length -= 1;

        } catch (error) {
            console.log(error);
        }
    }

    // Поиск по значению и вставка перед
    insertBefore(key, value) {
        try {
            let nodeToInsertBefore = this.findByValue(key);
            let newNode = new Node(value);

            if (nodeToInsertBefore.prev === null) {
                this.#length += 1;
                return this.unshift(value);
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

    // Поиск по значению и вставка после
    insertAfter(key, value) {
        try {
            let nodeToInsertAfter = this.findByValue(key);
            let newNode = new Node(value);

            if (nodeToInsertAfter.next === null) {
                return this.push(value);
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

    // Развернуть список в обратном порядке
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

    // Очистка связанного списка
    clear() {
        this.#first = null;
        this.#last = null;
        this.#length = 0;
    }
}

const list = new LinkedList();
list.push(1).push(2).push(3);
// console.log('0 =>', list.structure);
list.insertAfter(2, 9);
console.log('1 =>', list.structure);
list.reverse();
console.log('2=>', list.structure);
// list.reverse();
// console.log(list.structure);

// list.insertBefore(2, 5);
// console.log(list.structure);
// list.insertAfter(1, 9);
// console.log(list.structure);
// console.log(list.findByValue());

// console.log(list.removeByValue(3));
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.length);
// console.log(list.first.value);
// console.log(list.last.value);
// console.log(list.first.next.value);
// console.log(list.first.next.prev.value);
// list.clear();
// console.log(list.structure);
