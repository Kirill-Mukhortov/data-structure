import { beforeEach, describe, expect, test } from '@jest/globals';
import { DynamicArray } from './dynamicArray.js';

const initWithValues = () => {
    const dynamicArray = new DynamicArray(4);

    dynamicArray.add(1)
                .add(2)
                .add(3)
                .add(4);

    return dynamicArray;
};

describe('Dynamic Array', () => {
    let dynamicArray;

    beforeEach(() => {
        dynamicArray = initWithValues();
    });

    test('Should create dynamic array instance', () => {
        expect(dynamicArray).toBeInstanceOf(DynamicArray);
    });

    test('DynamicArray length should be equal to four', () => {
        expect(dynamicArray.length).toBe(4);
    });

    test('DynamicArray length when pass not valid values', () => {
        const dynArrayWithStringLength = new DynamicArray('5');
        const dynArrayWithNotNumberLength = new DynamicArray([]);
        const dynArrayWithNoValueLength = new DynamicArray();

        expect(dynArrayWithStringLength.maxElements).toBe(3);
        expect(dynArrayWithNotNumberLength.maxElements).toBe(3);
        expect(dynArrayWithNoValueLength.maxElements).toBe(3);
    });

    test('Get element by index', () => {
        const element = dynamicArray.get(2);
        expect(element).toBe(3);
    });

    test('Throw an error when trying to get an element by index that does not exist', () => {
        expect(() => {
            dynamicArray.get(5);
        }).toThrow('No element with index: 5');
    })
})
