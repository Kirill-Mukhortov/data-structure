import { describe, expect, test } from '@jest/globals';
import { LinkedList } from './list.js';

const initWithValues = () => {
    const list = new LinkedList();

    list.insertLast(1)
        .insertLast(2)
        .insertLast(3);

    return list;
};

describe('Linked List', () => {
    test('Should create list instance', () => {
        const list = initWithValues();
        expect(list).toBeInstanceOf(LinkedList);
    });

    test('LinkedList length should be equal to three', () => {
        const list = initWithValues();
        expect(list.length).toBe(3);
    });

    test('List with values', () => {
        const list = initWithValues();
        expect(list.convertValuesToString()).toBe('1,2,3');
        expect(list.first.value).toBe(1);
        expect(list.last.value).toBe(3);
    });

    test('List is empty', () => {
        const list = new LinkedList();
        expect(list.isEmpty).toBeTruthy();
    });

    test('First element does not has link on prev node', () => {
        const list = initWithValues();
        expect(list.first.prev).toBeNull();
    });

    test('Last element does not has link on next node', () => {
        const list = initWithValues();
        expect(list.last.next).toBeNull();
    });

    test('InsertLast', () => {
        const list = initWithValues();
        expect(list.insertLast(4).convertValuesToString()).toBe('1,2,3,4');
        expect(list.last.next).toBeNull();
        expect(list.length).toBe(4);
    });

    test('InsertLast and InsertFirst', () => {
        const list = new LinkedList();
        list.insertLast(1);
        list.insertFirst(2);
        expect(list.convertValuesToString()).toBe('2,1');
        expect(list.first.prev).toBeNull();
        expect(list.last.next).toBeNull();
        expect(list.length).toBe(2);
    });

    test('InsertFirst', () => {
        const list = initWithValues();
        expect(list.insertFirst(0).convertValuesToString()).toBe('0,1,2,3');
        expect(list.first.prev).toBeNull();
        expect(list.length).toBe(4);
    });

    test('InsertFirst and InsertLast', () => {
        const list = new LinkedList();
        list.insertFirst(1);
        list.insertLast(2);
        expect(list.convertValuesToString()).toBe('1,2');
        expect(list.first.prev).toBeNull();
        expect(list.last.next).toBeNull();
        expect(list.length).toBe(2);
    });

    test('RemoveLast', () => {
        const list = initWithValues();
        list.removeLast();
        expect(list.convertValuesToString()).toBe('1,2');
        expect(list.last.next).toBeNull();
        expect(list.length).toBe(2);
    });

    test('RemoveFirst', () => {
        const list = initWithValues();
        list.removeFirst();
        expect(list.convertValuesToString()).toBe('2,3');
        expect(list.first.prev).toBeNull();
        expect(list.length).toBe(2);
    });

    test('FindByValue', () => {
        const list = initWithValues();
        expect(list.findByValue(2).value).toBe(2);
    });

    test('RemoveByValue', () => {
        const list = initWithValues();
        list.removeByValue(2)
        expect(list.convertValuesToString()).toBe('1,3');
        expect(list.length).toBe(2);
    });

    test('InsertBefore', () => {
        const list = initWithValues();
        list.insertBefore(2, 9)
        expect(list.convertValuesToString()).toBe('1,9,2,3');
        expect(list.length).toBe(4);
    });

    test('InsertAfter', () => {
        const list = initWithValues();
        list.insertAfter(2, 9)
        expect(list.convertValuesToString()).toBe('1,2,9,3');
        expect(list.length).toBe(4);
    });

    test('Replace', () => {
        const list = initWithValues();
        list.replace(2, 9)
        expect(list.convertValuesToString()).toBe('1,9,3');
        expect(list.length).toBe(3);
    });

    test('Reverse', () => {
        const list = initWithValues();
        list.reverse()
        expect(list.convertValuesToString()).toBe('3,2,1');
        expect(list.first.prev).toBeNull();
        expect(list.last.next).toBeNull();
        expect(list.length).toBe(3);
    });

    test('Throw Errors when call methods on empty list', () => {
        const list = new LinkedList();

        expect(() => {
            list.removeLast();
        }).toThrow('List is empty');

        expect(() => {
            list.removeFirst();
        }).toThrow('List is empty');

        expect(() => {
            list.findByValue(5);
        }).toThrow('List is empty');

        expect(() => {
            list.reverse();
        }).toThrow('List is empty');

        try {
            list.removeByValue(5);
            list.insertBefore(1, 0);
            list.insertAfter(1, 2);
            list.replace(1, 2);
        } catch (error) {
            expect(error).toEqual({
                error: 'List is empty',
            });
        }
    });
});
