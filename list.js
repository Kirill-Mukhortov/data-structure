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
        const newNode = new Node(value);

        if (!this.#first && !this.#last) {
            this.#first = newNode;
            this.#last = newNode;
        } else {
            newNode.setPrev(this.#last);
            this.#last.setNext(newNode);
        }

        this.#last = newNode;

        this.#length += 1;
        return this;
    }

    // Вставка в начало
    unshift(value) {
        const newNode = new Node(value);
        const current = this.#first;

        this.#first = newNode;
        this.#first.setNext(current);
        this.#length += 1;
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
            this.#length -= 1;
        } catch (error) {
            console.log(error);
        }
    }

    // Поиск по значению и вставка перед
    insertBefore(key, value) {
        try {
            const nodeToInsertBefore = this.findByValue(key);
            const newNode = new Node(value);

            if (nodeToInsertBefore.prev === null) {
                this.#length += 1;
                return this.unshift(value);
            }

            nodeToInsertBefore.prev.setNext(newNode);
            newNode.setNext(nodeToInsertBefore);
            this.#length += 1;
        } catch (error) {
            console.log(error);
        }
    }

    // Поиск по значению и вставка после
    insertAfter(key, value) {
        try {
            const nodeToInsertAfter = this.findByValue(key);
            const newNode = new Node(value);

            if (nodeToInsertAfter.next === null) {
                return this.push(value);
                this.#length += 1;
            }

            newNode.setNext(nodeToInsertAfter.next);
            nodeToInsertAfter.setNext(newNode);
            this.#length += 1;
        } catch (error) {
            console.log(error);
        }
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
console.log(list.structure);
// list.insertBefore(2, 5);
// console.log(list.structure);
list.insertAfter(1, 9);
console.log(list.structure);
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
