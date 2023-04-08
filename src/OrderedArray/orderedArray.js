import { ordArrBinarySearch } from './ordArrBinarySearch.js';

class OrderedArray {
    data = [];
    length = 0;

    get structure() {
        return this.data;
    }

    #shiftLoop(index, reverse = false) {
        if (reverse) {
            for (let i = this.length; i > index; i -= 1) {
                this.data[i] = this.data[i - 1];
            }
        } else {
            for (let i = index; i < this.length; i += 1) {
                this.data[i] = this.data[i + 1];
            }
        }
    }

    find(value) {
        const findIndex = ordArrBinarySearch(this.data, value);

        if (findIndex === -1) {
            throw new ReferenceError(`There is no element with value: ${value}`);
        } else {
            return findIndex;
        }
    }

    insert(value) {
        // If the array is empty, then immediately insert the value at the beginning
        if (this.length === 0) {
            this.data[0] = value;
            this.length += 1;
            return this;
        }

        // If the last value is less than the inserted one, then immediately insert it at the end
        if (this.data[this.data.length - 1] < value) {
            this.data.push(value);
            this.length += 1;
            return this;
        }

        // If the first value is greater than the inserted value, then insert it first and shift the indexes of the rest
        if (this.data[0] > value) {
            this.#shiftLoop(0, true);
            this.data[0] = value;
            this.length += 1;
            return this;
        }

        const index = ordArrBinarySearch(this.data, value);

        this.#shiftLoop(index, true);

        this.data[index] = value;
        this.length += 1;
        return this;
    }

    delete(value) {
        try {
            const indexToRemove = this.find(value);

            this.#shiftLoop(indexToRemove);
            this.length -= 1;
        } catch (error) {
            console.error(error);
        }

        return this;
    }

}

