import { Vector } from '../Vector/vector.js';
import { ordArrBinarySearch } from './ordArrBinarySearch.js';

export class OrderedArray {
    #data;

    constructor(capacity) {
        this.#data = new Vector(capacity);
    }

    get structure() {
        return this.#data.structure;
    }

    get data() {
        return this.#data;
    }

    get length() {
        return this.#data.length;
    }

    #shiftLoop(index) {
        for (let i = this.length; i > index; i -= 1) {
            this.#data.add(this.#data.get(i - 1), i, false);
        }
    }

    find(value) {
        const findIndex = ordArrBinarySearch(this.#data, value);

        if (findIndex === -1) {
            throw new ReferenceError(`There is no element with value: ${value}`);
        } else {
            return findIndex;
        }
    }

    insert(value) {
        // If the array is empty, then immediately insert the value at the beginning
        if (this.length === 0) {
            this.#data.add(value, 0);

            return this;
        }

        // If the last value is less than the inserted one, then immediately insert it at the end
        if (this.#data.get([this.#data.length - 1]) < value) {
            this.#data.add(value, this.#data[this.#data.length - 1]);

            return this;
        }

        // If the first value is greater than the inserted value, then insert it first and shift the indexes of the rest
        if (this.#data.get(0) > value) {
            this.#shiftLoop(0);
            this.#data.add(value, 0);

            return this;
        }

        const index = ordArrBinarySearch(this.#data, value);

        this.#shiftLoop(index);

        this.#data.add(value, index);

        return this;
    }

    delete(value) {
        try {
            const indexToRemove = this.find(value);

            this.#data.delete(this.#data.get(indexToRemove));
        } catch (error) {
            console.error(error);
        }

        return this;
    }
}
