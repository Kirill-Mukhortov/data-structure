import { Dequeue } from './dequeue.js';
import { beforeEach, describe, expect, test } from '@jest/globals';

const initWithValues = () => {
    const dequeue = new Dequeue();

    dequeue.push(10)
           .push(11)
           .push(12);

    return dequeue;
}

describe('Dequeue', () => {
    let dequeueWithValues;
    let emptyDequeue;

    beforeEach(() => {
        dequeueWithValues = initWithValues();
        emptyDequeue = new Dequeue();
    });

    test('Should create dequeue instance', () => {
        expect(dequeueWithValues).toBeInstanceOf(Dequeue);
    });

    test('Dequeue length should be equal to 3', () => {
        expect(dequeueWithValues.length).toBe(3);
    });

    test('Dequeue is empty', () => {
        expect(emptyDequeue.isEmpty).toBeTruthy();
    });

    test('Dequeue first element must be 10', () => {
        expect(dequeueWithValues.first).toBe(10);
    });

    test('Dequeue first element must be 9', () => {
        dequeueWithValues.unshift(9);
        expect(dequeueWithValues.first).toBe(9);
    });

    test('Pop last element', () => {
        dequeueWithValues.pop();
        expect(dequeueWithValues.length).toBe(2);
    });

    test('Throw Errors when call methods on empty dequeue', () => {
        expect(() => {
            emptyDequeue.last;
        }).toThrow('Dequeue is empty');

        expect(() => {
            emptyDequeue.pop();
        }).toThrow('Dequeue is empty');

    });
})
