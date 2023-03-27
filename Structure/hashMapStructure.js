function Structure(scheme) {
    const data = new Array(scheme.length);

    const res = {};

    for (const [i, key] of scheme.entries()) {

        Object.defineProperty(res, key, {
            get() {
                return data[i];
            },

            set(value) {
                data[i] = value;
            },
        });

    }

    return res;
}

const s = Structure(['name', 'age']);

s.age = 37;
s.name = 'bob';

console.log(s.age);
console.log(s.name);
