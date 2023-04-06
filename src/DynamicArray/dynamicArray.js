import { LinkedList } from '../LinkedList/list.js';

export class DynamicArray {
    #data;
    #length = 0;
    #maxElements;
    #currentNodeLength = 0;

    constructor(length) {
        if (!length || !Number.isInteger(length) || length < 0) {
            this.#maxElements = 3;
        } else {
            this.#maxElements = length;
        }

        this.#data = new LinkedList();
        this.#data.insertLast(new Array(this.#maxElements));
    }

    get maxElements() {
        return this.#maxElements;
    }

    get length() {
        return this.#length;
    }

    #getNode(index) {
        if (index < this.#maxElements) {
            return 0;
        } else {
            return Math.floor(index / this.#maxElements);
        }
    }

    #getIndex(index) {
        if (index >= this.#maxElements) {
            return index % this.#maxElements;
        } else {
            return index;
        }
    }

    add(value) {
        this.#length += 1;

        if (this.#currentNodeLength !== this.#maxElements) {
            this.#data.last.value[this.#currentNodeLength] = value;
            this.#currentNodeLength += 1;
        } else {
            this.#data.insertLast(new Array(this.#maxElements));
            this.#currentNodeLength = 0;
            this.#data.last.value[this.#currentNodeLength] = value;
            this.#currentNodeLength += 1;
        }

        return this;
    }

    get(index) {
        let current = this.#data.first;
        let node = this.#getNode(index);

        if (index + 1 > this.#length) {
            throw new ReferenceError(`No element with index: ${index}`);
        }

        if (index < this.#maxElements) {
            return current.value[index];
        }

        while (node !== 0) {
            current = current.next;
            node--;
        }

        return current.value[this.#getIndex(index)];
    }
}
