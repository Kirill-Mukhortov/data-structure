import { beforeEach, describe, expect, test } from '@jest/globals';
import { Vector } from './vector.js';

const initWithValues = () => {
    const vector = new Vector(4);

    vector.add(1)
          .add(2)
          .add(3)
          .add(4);

    return vector;
};

describe('Vector', () => {
    let vector;

    beforeEach(() => {
        vector = initWithValues();
    });

    test('Should create vector instance', () => {
        expect(vector).toBeInstanceOf(Vector);
    });

    test('Vector length should be equal to four', () => {
        expect(vector.bufferLength).toBe(4);
    });

    test('Number of items added into Vector should be equal to five', () => {
        vector.add(5);
        expect(vector.length).toBe(5);
    });

    test('Should increase vector length when add new value into full vector', () => {
        vector.add(5);
        expect(vector.bufferLength).toBe(8);
    });

    test('Get element by index', () => {
        const element = vector.get(2);
        expect(element).toBe(3);
    });

    test('Throw an error when trying to get an element by index that does not exist', () => {
        expect(() => {
            vector.get(5);
        }).toThrow('No element with index: 5');
    });
});
