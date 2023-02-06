import { describe, expect, test } from '@jest/globals';
import { binarySearch } from './binarySearch.js';

describe('BinarySearch', () => {
    const array = [-432, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6, 98];

    test('Search value in left half', () => {
        const find = binarySearch(1, array);
        expect(find).toBe(2);
    });

    test('Search value in right half', () => {
        const find = binarySearch(4, array);
        expect(find).toBe(8);
    });

    test('Search for first value', () => {
        const find = binarySearch(-432, array);
        expect(find).toBe(0);
    });

    test('Search for last value', () => {
        const find = binarySearch(98, array);
        expect(find).toBe(11);
    });

    test('Search for a value that is not in the array', () => {
        const find = binarySearch(8, array);
        expect(find).toBe(-1);
    });
});
