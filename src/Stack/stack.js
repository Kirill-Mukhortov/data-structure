export class Stack {
    #head = null;
    #size = 0;

    constructor(initSize) {
        if (initSize <= 0 || initSize === undefined) {
            throw new Error('Initial size must be greater than 0');
        } else {
            this.initSize = initSize;
            this.stack = new Array(this.initSize).fill(null);
        }
    }

    get head() {
        return this.#head;
    }

    get size() {
        return this.#size;
    }

    push(value) {
        if (!value) {
            throw new ReferenceError('No value passed');
        }

        if (this.#size !== this.initSize) {
            this.#head = value;
            this.stack[this.#size] = value;
            this.#size += 1;
            return this;
        } else {
            throw new Error('Stack is full');
        }
    }

    pop() {
        if (this.#size !== 0) {
            this.#size -= 1;
            this.stack[this.#size] = null;
            this.#head = this.stack[this.#size - 1];
        } else {
            throw new Error('Stack is empty, nothing to pop');
        }
    }
}
