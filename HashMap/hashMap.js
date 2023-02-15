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

    get struct() {
        return this.#table.bufferLength;
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

    }

    set(key, value) {
        if (typeof key !== 'string') {
            key = String(key);
        }

        const hashKey = this.#hashFunction(key);

    }


    // Должен быть вектор
    // длинна - простое число

    // если ключ уже есть, то на это место ставим linked list
    // если обращаемся к элементу и видим там linked list, то идем уже по методам next и проверяем value
}

const map = new HashMap(32);

// map.set(10, 'foo');

console.log(map.struct);
