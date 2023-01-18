import { beforeEach, describe, expect, test } from '@jest/globals';
import { Queue } from './queue.js';


const initWithValues = () => {
    const queue = new Queue();

    queue.push(10)
         .push(11)
         .push(12);

    return queue;
}

describe('Queue', () => {
    let queueWithValues;
    let emptyQueue;

    beforeEach(() => {
        queueWithValues = initWithValues();
        emptyQueue = new Queue();
    });

    test('Should create queue instance', () => {
        expect(queueWithValues).toBeInstanceOf(Queue);
    });

    test('Queue length should be equal to 3', () => {
        expect(queueWithValues.length).toBe(3);
    });

    test('Queue is empty', () => {
        expect(emptyQueue.isEmpty).toBeTruthy();
    });

    test('Queue first element must be 10', () => {
        expect(queueWithValues.head).toBe(10);
    });

    test('Shift first element of queue', () => {
        queueWithValues.shift();
        expect(queueWithValues.head).toBe(11);
        expect(queueWithValues.length).toBe(2);
    });

    test('Push into the queue', () => {
        queueWithValues.push(13);
        expect(queueWithValues.length).toBe(4);
    });

    test('Throw Errors when call methods on empty queue', () => {
        expect(() => {
            emptyQueue.head;
        }).toThrow('Queue is empty');

        expect(() => {
            emptyQueue.shift();
        }).toThrow('Queue is empty');

    });
})
