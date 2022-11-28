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

    // Проверка пустой список или нет
    isEmpty() {
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
        if (this.isEmpty()) {
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
        if (this.isEmpty()) {
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

    // Очистка связанного списка
    clear() {
        this.#first = null;
        this.#last = null;
        this.#length = 0;
    }
}

const list = new LinkedList();
list.push(1).push(2).push(3);
console.log(list.findByValue(3));
// console.log(list.structure);             // LinkedList =>  1 => 2 => 3 => NULL
// console.log(list.pop());
// console.log(list.structure);
// console.log(list.length);                // 3
// console.log(list.first.value);           // 1
// console.log(list.last.value);            // 3
// console.log(list.first.next.value);      // 2
// console.log(list.first.next.prev.value); // 1
// list.clear();
// console.log(list.structure);             // LinkedList => NULL
