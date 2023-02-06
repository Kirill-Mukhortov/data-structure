export class Vector {
    #buffer;
    #capacity;
    #length = 0;

    constructor(capacity) {
        this.#capacity = capacity;
        this.#buffer = new Array(capacity);
    }

    #increaseBuffer() {
        this.#capacity *= 2;
        const tempBuffer = this.#buffer;
        this.#buffer = new Array(this.#capacity);
        for (let i = 0; i < tempBuffer.length; i += 1) {
            this.#buffer[i] = tempBuffer[i];
        }
    }

    add(value) {
        if (this.#length >= this.#capacity) {
            this.#increaseBuffer();
        }
        this.#buffer[this.#length] = value;
        this.#length += 1;
    }

    get(index) {
        return this.#buffer[index];
    }
}
