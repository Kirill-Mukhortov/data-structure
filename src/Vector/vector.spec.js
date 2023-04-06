import { Vector } from './vector.js';
import { beforeEach, describe, expect, test } from '@jest/globals';

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
    let emptyVector;

    beforeEach(() => {
        vector = initWithValues();
        emptyVector = new Vector();
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

    test('Should add value by index', () => {
        emptyVector.add(4, 3);
        const element = vector.get(3);
        expect(element).toBe(4);
    });

    test('Get element by index', () => {
        const element = vector.get(2);
        expect(element).toBe(3);
    });

    test('Delete element by value', () => {
        vector.delete(3);
        expect(vector.structure).toEqual([1, 2, 4, undefined, undefined]);
    });

    test('Throw an error when trying to get an element by index that does not exist', () => {
        expect(() => {
            vector.get(5);
        }).toThrow('No element with index: 5');
    });

    test('Throw an error when trying to delete an element by value that does not exist', () => {
        expect(() => {
            vector.delete(5);
        }).toThrow('There is no element with value: 5');
    });
});
