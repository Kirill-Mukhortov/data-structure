import { Stack } from './stack.js';
import { beforeEach, describe, expect, test } from '@jest/globals';

const initWithValues = () => {
    const stack = new Stack(4);

    stack.push(1)
         .push(2)
         .push(3);

    return stack;
}

describe('Stack', () => {
    let stackWithValues;

    beforeEach(() => {
        stackWithValues = initWithValues();
    });

    test('Should create stack instance', () => {
        expect(stackWithValues).toBeInstanceOf(Stack);
    });

    test('Stack size should be equal to 3', () => {
        expect(stackWithValues.size).toBe(3);
    });

    test('Stack head must be 3', () => {
        expect(stackWithValues.head).toBe(3);
    });

    test('Pop last element of stack', () => {
        stackWithValues.pop();
        expect(stackWithValues.head).toBe(2);
        expect(stackWithValues.size).toBe(2);
    });

    test('Push into the stack', () => {
        stackWithValues.push(13);
        expect(stackWithValues.size).toBe(4);
        expect(stackWithValues.head).toBe(13);
    });

    test('Throw Errors when call methods on full stack', () => {
        expect(() => {
            stackWithValues.push(4);
            stackWithValues.push(5);
        }).toThrow('Stack is full');
    });

    test('Throw Errors when call methods on empty stack', () => {
        expect(() => {
            stackWithValues.pop();
            stackWithValues.pop();
            stackWithValues.pop();
            stackWithValues.pop();
        }).toThrow('Stack is empty, nothing to pop');
    });

    test('Try to create empty stack', () => {
        expect(() => {
            const stack = new Stack();
        }).toThrow('Initial size must be greater than 0');
    });
})
