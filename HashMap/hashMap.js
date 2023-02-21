import { Vector } from '../Vector/vector.js';
import { LinkedList } from '../LinkedList/list.js';

export class HashMap {
    #table;
    #capacity;

    constructor(capacity) {
        if (!this.#isPrimeNumber(capacity)) {
            this.#capacity = this.#setNearestPrimeNumber(capacity);
        } else {
            this.#capacity = capacity;
        }

        this.#table = new Vector(this.#capacity);
    }

    get structure() {
        return this.#table.structure;
    }

    #setNearestPrimeNumber(number) {
        while (!this.#isPrimeNumber(number)) {
            number += 1;
        }
        return number;
    }

    #isPrimeNumber(number) {
        if (number === 0 || number === 1) {
            return false;
        } else if (number === 2) {
            return true;
        } else {
            for (let i = 2; i < number; i += 1) {
                if (number % i === 0) {
                    return false;
                }
            }
            return true;
        }
    }

    #hashFunction(key) {
        let hash = 0;

        if (typeof key !== 'string') {
            key = String(key);
        }

        for (let i = 0; i < key.length; i += 1) {
            const code = key.charCodeAt(i);
            hash = ((hash << 5) - hash) + code;
            hash = hash & hash;
        }

        return hash % this.#capacity;
    }

    #checkIsIndexBusy(index, key = null) {
        try {
            if (this.#table.get(index)[0] === String(key)) {
              return false;
            }
            return this.#table.get(index);
        } catch (error) {}
    }

    set(key, value) {
        const hashKey = this.#hashFunction(key);

        if (this.#checkIsIndexBusy(hashKey, key)) {
            if (this.#checkIsIndexBusy(hashKey) instanceof LinkedList) {
                const list = this.#table.get(hashKey);
                list.insertLast([String(key), value]);
            } else {
                const oldValue = this.#checkIsIndexBusy(hashKey);

                this.#table.add(new LinkedList(), hashKey);

                const list = this.#table.get(hashKey);
                list.insertLast(oldValue);
                list.insertLast([String(key), value]);
            }
        } else {
            this.#table.add([String(key), value], hashKey);
        }

        return this;
    }

    get(key) {
        const hashKey = this.#hashFunction(key);
        if (this.#checkIsIndexBusy(hashKey) === undefined) {
            throw new Error(`No element with key: ${key}`);
        }

        if (this.#checkIsIndexBusy(hashKey) instanceof LinkedList) {
            let node = this.#table.get(hashKey).first;

            while (node.value[0] !== String(key)) {
                node = node.next;
            }

            return node.value[1];
        } else {
            return this.#table.get(hashKey)[1];
        }
    }
}
