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

    get(val) {
        return this.#data[this.#getIndexCompiled(val)];
    }

    set(key, value) {
        this.#data[this.#getIndexCompiled(key)] = value;
        return this;
    }
}

const s = new CodeGenStructure(['name', 'age']);

s.set('name', 'Bob')
s.set('age', 33)
console.log(s.get('name'));
console.log(s.get('age'));
// console.log(s.get('ggg'));

// console.log(s);
