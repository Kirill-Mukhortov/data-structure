import { LinkedList } from '../LinkedList/list.js';

export class Queue {
    #queue = new LinkedList();

    get length(){
        return this.#queue.length;
    }

    get isEmpty() {
        return this.#queue.length === 0;
    }

    get head() {
        if (!this.isEmpty) {
            return this.#queue.first.value;
        } else {
            throw new Error('Queue is empty');
        }
    }

    push(value) {
        this.#queue.insertLast(value);
        return this;
    }

    shift() {
        if (!this.isEmpty) {
            return this.#queue.removeFirst();
        } else {
            throw new Error('Queue is empty');
        }
    }
}
