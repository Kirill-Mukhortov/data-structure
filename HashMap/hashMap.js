import { Vector } from '../Vector/vector.js';

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

        for (let i = 0; i < key.length; i += 1) {
            const code = key.charCodeAt(i);
            hash = ((hash << 5) - hash) + code;
            hash = hash & hash;
        }

        return hash % this.#capacity;
    }

    #checkIsIndexBusy(index) {
        return this.#table[index] !== undefined;
    }

    set(key, value) {
        if (typeof key !== 'string') {
            key = String(key);
        }

        const hashKey = this.#hashFunction(key);

        if (this.#checkIsIndexBusy(hashKey)) {
            console.log('Ho-Ho-Ho');
            // если занято, то добавляем туда Связанный список
        } else {
            this.#table.add(value, hashKey);
        }

        return this;
    }

    get(value) {

    }


    // Должен быть вектор
    // длинна - простое число

    // если ключ уже есть, то на это место ставим linked list
    // если обращаемся к элементу и видим там linked list, то идем уже по методам next и проверяем value
}

const map = new HashMap(37); // 32 - не простое, 37 - простое

map.set(10, 'foo');
map.set(10, 'foo');
map.set(11, 'bar');
map.set(12, 'baz');


console.log(map.structure);
