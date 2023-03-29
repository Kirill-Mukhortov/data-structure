export class HashMapStructure {
    #data;

    constructor(schema) {
        if (Array.isArray(schema) && schema.length !== 0 && schema !== 'undefined') {
            this.#data = new Array(schema.length);

            for (const [i, key] of schema.entries()) {
                Object.defineProperty(this, key, {
                    get() {
                        return this.#data[i];
                    },

                    set(value) {
                        this.#data[i] = value;
                    },
                });
            }
        } else {
            throw new Error('Params must be an array or it`s length must be greater than 0');
        }
    }

    set(key, value) {
        if (!this.hasOwnProperty(key)) {
            throw new ReferenceError(`There is no key '${key}' in the structure`);
        }

        if (arguments.length < 2) {
            throw new Error('Need to pass two arguments');
        }

        this[key] = value;

        return this;
    }

    get(key) {
        if (this[key] === undefined) {
            throw new ReferenceError(`No value for key - ${key}`);
        }

        return this[key];
    }
}
