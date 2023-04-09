import { Vector } from '../Vector/vector.js';
import { OrderedArray } from './orderedArray.js';
import { beforeEach, describe, expect, test } from '@jest/globals';

const initWithValues = () => {
    const ordArr = new OrderedArray();

    ordArr.insert(5)
          .insert(5)
          .insert(9)
          .insert(8)
          .insert(7)
          .insert(10)
          .insert(3)
          .insert(6);

    return ordArr;
};

describe('OrderedArray methods', () => {
    let ordArr;

    beforeEach(() => {
        ordArr = initWithValues();
    });

    test('Should create ordered array instance', () => {
        expect(ordArr).toBeInstanceOf(OrderedArray);
    });

    test('Should create inner data array instance of vector', () => {
        expect(ordArr.data).toBeInstanceOf(Vector);
    });

    test('Should insert values and sort its', () => {
        expect(ordArr.structure).toEqual([3, 5, 5, 6, 7, 8, 9, 10]);
        expect(ordArr.length).toBe(8);
    });

    test('Should find and return index by value', () => {
        const element = ordArr.find(10);
        expect(element).toBe(7);
    });

    test('Should delete element by value', () => {
        ordArr.delete(10);
        ordArr.delete(9);
        ordArr.delete(3);

        expect(ordArr.structure).toEqual([5, 5, 6, 7, 8, undefined, undefined, undefined]);
        expect(ordArr.length).toBe(5);
    });

    test('Should increase inner data twice', () => {
        const orderedArray = new OrderedArray(2);
        orderedArray.insert(5)
                    .insert(5)
                    .insert(9)
        expect(orderedArray.structure).toEqual([5, 5, 9, undefined]);
    });
});

describe('Test throw errors', () => {
    let ordArr;
    let emptyOrdArr;

    beforeEach(() => {
        ordArr = initWithValues();
        emptyOrdArr = new OrderedArray();
    });

    test('Throw an error when trying to find element by value that does not exist', () => {
        expect(() => {
            ordArr.find(11);
        }).toThrow('There is no element with value: 11');
    });

    test('Throw an error when trying to delete element by value that does not exist', () => {
        try {
            ordArr.delete(11);
        } catch (error) {
            expect(error).toEqual({
                error: 'There is no element with value: 11',
            });
        }
    });
});
