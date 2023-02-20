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

    get structure() {
        return this.#buffer;
    }

    get bufferLength() {
        return this.#buffer.length;
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

    add(value, index = null) {
        if (this.#length >= this.#capacity) {
            this.#increaseBuffer();
        }
        this.#buffer[index ? index : this.#length] = value;
        this.#length += 1;

        return this;
    }

    get(index) {
        if (this.#buffer[index] === undefined) {
            throw new Error(`No element with index: ${index}`);
        } else {
            return this.#buffer[index];
        }
    }
}
