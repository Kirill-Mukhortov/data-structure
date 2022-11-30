import { beforeAll, beforeEach, describe, expect, test } from '@jest/globals';
import { LinkedList } from './list.js';

const initWithValues = () => {
    const list = new LinkedList();

    list.insertLast(1)
        .insertLast(2)
        .insertLast(3);

    return list;
};

describe('Linked List', () => {
    let listWithValues;
    let emptyList;

    beforeEach(() => {
        listWithValues = initWithValues();
        emptyList = new LinkedList();
    })

    test('Should create list instance', () => {
        expect(listWithValues).toBeInstanceOf(LinkedList);
    });

    test('LinkedList length should be equal to three', () => {
        expect(listWithValues.length).toBe(3);
    });

    test('List with values', () => {
        expect(listWithValues.convertValuesToString()).toBe('1,2,3');
        expect(listWithValues.first.value).toBe(1);
        expect(listWithValues.last.value).toBe(3);
    });

    test('List is empty', () => {
        expect(emptyList.isEmpty).toBeTruthy();
    });

    test('First element does not has link on prev node', () => {
        expect(listWithValues.first.prev).toBeNull();
    });

    test('Last element does not has link on next node', () => {
        expect(listWithValues.last.next).toBeNull();
    });

    test('InsertLast', () => {
        expect(listWithValues.insertLast(4).convertValuesToString()).toBe('1,2,3,4');
        expect(listWithValues.last.next).toBeNull();
        expect(listWithValues.length).toBe(4);
    });

    test('InsertLast and InsertFirst', () => {
        emptyList.insertLast(1);
        emptyList.insertFirst(2);

        expect(emptyList.convertValuesToString()).toBe('2,1');
        expect(emptyList.first.prev).toBeNull();
        expect(emptyList.last.next).toBeNull();
        expect(emptyList.length).toBe(2);
    });

    test('InsertFirst', () => {
        expect(listWithValues.insertFirst(0).convertValuesToString()).toBe('0,1,2,3');
        expect(listWithValues.first.prev).toBeNull();
        expect(listWithValues.length).toBe(4);
    });

    test('InsertFirst and InsertLast', () => {
        emptyList.insertFirst(1);
        emptyList.insertLast(2);

        expect(emptyList.convertValuesToString()).toBe('1,2');
        expect(emptyList.first.prev).toBeNull();
        expect(emptyList.last.next).toBeNull();
        expect(emptyList.length).toBe(2);
    });

    test('RemoveLast', () => {
        listWithValues.removeLast();

        expect(listWithValues.convertValuesToString()).toBe('1,2');
        expect(listWithValues.last.next).toBeNull();
        expect(listWithValues.length).toBe(2);
    });

    test('RemoveFirst', () => {
        listWithValues.removeFirst();

        expect(listWithValues.convertValuesToString()).toBe('2,3');
        expect(listWithValues.first.prev).toBeNull();
        expect(listWithValues.length).toBe(2);
    });

    test('FindByValue', () => {
        const list = initWithValues();

        expect(list.findByValue(2).value).toBe(2);
    });

    test('removeOnceByValue', () => {
        listWithValues.removeOnceByValue(2);

        expect(listWithValues.convertValuesToString()).toBe('1,3');
        expect(listWithValues.length).toBe(2);
    });

    test('removeAllByValue', () => {
        emptyList.insertLast(1).insertLast(2).insertLast(2).insertLast(3);
        emptyList.removeAllByValue(2);

        expect(emptyList.convertValuesToString()).toBe('1,3');
        expect(emptyList.length).toBe(2);

        emptyList.clear();

        emptyList.insertLast(1).insertLast(2).insertLast(2).insertLast(2);
        emptyList.removeAllByValue(2);

        expect(emptyList.convertValuesToString()).toBe('1');
        expect(emptyList.length).toBe(1);
    });

    test('InsertBefore', () => {
        listWithValues.insertBefore(2, 9);

        expect(listWithValues.convertValuesToString()).toBe('1,9,2,3');
        expect(listWithValues.length).toBe(4);
    });

    test('InsertAfter', () => {
        listWithValues.insertAfter(2, 9);

        expect(listWithValues.convertValuesToString()).toBe('1,2,9,3');
        expect(listWithValues.length).toBe(4);
    });

    test('Replace', () => {
        listWithValues.replace(2, 9);

        expect(listWithValues.convertValuesToString()).toBe('1,9,3');
        expect(listWithValues.length).toBe(3);
    });

    test('Reverse', () => {
        listWithValues.reverse();

        expect(listWithValues.convertValuesToString()).toBe('3,2,1');
        expect(listWithValues.first.prev).toBeNull();
        expect(listWithValues.last.next).toBeNull();
        expect(listWithValues.length).toBe(3);
    });

    test('Clear', () => {
        listWithValues.clear();
        
        expect(listWithValues.length).toBe(0);
        expect(listWithValues.first).toBeNull();
        expect(listWithValues.last).toBeNull();
    });

    test('Throw Errors when call methods on empty list', () => {
        expect(() => {
            emptyList.removeLast();
        }).toThrow('List is empty');

        expect(() => {
            emptyList.removeAllByValue();
        }).toThrow('List is empty');

        expect(() => {
            emptyList.removeFirst();
        }).toThrow('List is empty');

        expect(() => {
            emptyList.findByValue(5);
        }).toThrow('List is empty');

        expect(() => {
            listWithValues.findByValue(4);
        }).toThrow('Value not found');

        expect(() => {
            emptyList.reverse();
        }).toThrow('List is empty');

        try {
            emptyList.removeOnceByValue(5);
            emptyList.insertBefore(1, 0);
            emptyList.insertAfter(1, 2);
            emptyList.replace(1, 2);
        } catch (error) {
            expect(error).toEqual({
                error: 'List is empty',
            });
        }
    });
});
