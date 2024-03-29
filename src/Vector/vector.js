export class Vector {
    #buffer;
    #capacity;
    #length = 0;

    constructor(capacity) {
        if (!capacity || !Number.isInteger(capacity) || capacity < 0) {
            this.#capacity = 10;
        } else {
            this.#capacity = capacity;
        }

        this.#buffer = new Array(this.#capacity);
    }

    get length() {
        return this.#length;
    }

    get bufferLength() {
        return this.#buffer.length;
    }

    get structure() {
        return this.#buffer;
    }

    #increaseBuffer() {
        this.#capacity *= 2;
        const tempBuffer = this.#buffer;
        this.#buffer = new Array(this.#capacity);

        for (let i = 0; i < tempBuffer.length; i += 1) {
            this.#buffer[i] = tempBuffer[i];
        }

        return this;
    }

    add(value, index = null, increaseLength = true) {
        if (this.#length >= this.#capacity) {
            this.#increaseBuffer();
        }
        this.#buffer[index !== null ? index : this.#length] = value;

        if (increaseLength) {
            this.#length += 1;
        }

        return this;
    }

    get(index, needUndef = false) {
        if (this.#buffer[index] === undefined && !needUndef) {
            throw new Error(`No element with index: ${index}`);
        } else {
            return this.#buffer[index];
        }
    }

    delete(value) {
        let i;
        for (i = 0; i < this.#buffer.length; i += 1) {
            if (this.#buffer[i] === value) {
                break;
            }
        }

        if (i === this.#buffer.length && this.#buffer[i] !== value) {
            throw new ReferenceError(`There is no element with value: ${value}`);
        } else {
            for (let j = i; j < this.#buffer.length; j += 1) {
                this.#buffer[j] = this.#buffer[j + 1];
            }
            this.#length -= 1;
        }

        return this;
    }
}
