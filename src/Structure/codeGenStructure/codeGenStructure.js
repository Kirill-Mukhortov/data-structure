export class CodeGenStructure {
    #data;
    #getIndexCompiled;

    constructor(schema) {
        if (Array.isArray(schema) && schema.length !== 0 && schema !== 'undefined') {
            this.#data = new Array(schema.length);
            this.#getIndexCompiled = CodeGenStructure.getIndex(schema);
        } else {
            throw new Error('Params must be an array or it`s length must be greater than 0');
        }
    }

    static getIndex(schema) {
        const getIndex = `
            switch (key) {
                ${schema.reduce((res, key, i) => res + `case '${key}': return ${i};`, '')}
                default: throw new ReferenceError('No value for key - ' + key);
            }
        `;

        return Function('key', getIndex);
    }

    get(key) {
        return this.#data[this.#getIndexCompiled(key)];
    }

    set(key, value) {
        if (arguments.length < 2) {
            throw new Error('Need to pass two arguments');
        }

        this.#data[this.#getIndexCompiled(key)] = value;
        return this;
    }
}
