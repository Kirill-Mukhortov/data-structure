export class Structure {
    constructor(params) {
        if (Array.isArray(params) && params.length !== 0 && params !== 'undefined') {
            this.structure = new Map();
            for (const element of params) {
                this.structure.set(element, null);
            }
        } else {
            throw new Error('Params must be an array or it`s length must be greater than 0');
        }
    }

    set(key, value) {
        if (arguments.length < 2) {
            throw new Error('Need to pass two arguments');
        }

        if (this.structure.has(key)) {
            this.structure.set(key, value);
            return this;
        } else {
            throw new Error('No such key in structure');
        }
    }

    get(key) {
        if (this.structure.has(key)) {
          return this.structure.get(key);
        } else {
            throw new Error('No such key in structure');
        }
    }

    delete(key) {
        if (this.structure.has(key)) {
            this.structure.delete(key);
            return this;
        } else {
            throw new Error('No such key in structure');
        }

    }
}
