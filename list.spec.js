import { describe, expect, test } from '@jest/globals';
import { LinkedList } from './list.js';

const init = () => {
    const list = new LinkedList();

    list.insertLast(1)
        .insertLast(2)
        .insertLast(3);

    return list;
}

describe('Linked List', () => {
    test('Should create list instance', () => {
        const list = init();
        expect(list).toBeInstanceOf(LinkedList);
    })

    test('LinkedList length should be equal to three', () => {
        const list = init();
        expect(list.length).toBe(3);
    })

    test('List values', () => {
        const list = init();
        expect(list.convertValuesToString()).toBe('1,2,3')
    })
});
