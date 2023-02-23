import { Vector } from '../Vector/vector.js';
import { HashMap } from './hashMap.js';
import { LinkedList } from '../LinkedList/list.js';
import { describe, expect, test } from '@jest/globals';

describe('Hash Map', () => {
    const map = new HashMap(32);

    test('Should create hash map instance', () => {
        expect(map).toBeInstanceOf(HashMap);
    });

    test('Hash map should be instance of vector', () => {
        expect(map.table).toBeInstanceOf(Vector);
    });

    test('If capacity is not a prime number, should set nearest prime number', () => {
        expect(map.hashMapCapacity).toBe(37);
    });

    test('Should set array of key/value into hash map', () => {
        map.set(10, 'foo');
        expect(map.structure[13]).toStrictEqual(['10', 'foo']);
    });

    test('Key must be a string type', () => {
        map.set(10, 'foo');
        expect(typeof map.structure[13][0]).toBe('string');
    });

    test('With the same index, the value must be overwritten', () => {
        map.set(10, 'foo');
        map.set(10, 'bar');
        expect(map.structure[13]).toStrictEqual(['10', 'bar']);
    });

    test('If the index is busy, then it should be added Linked List in its place', () => {
        map.set(10, 'foo');
        map.set(2, 'bar');
        expect(map.structure[13]).toBeInstanceOf(LinkedList);
    });

    test('Linked List must contain the old value and the new one', () => {
        map.set(10, 'foo');
        map.set(2, 'bar');
        expect(map.structure[13].first.value).toStrictEqual(['10', 'foo']);
        expect(map.structure[13].first.next.value).toStrictEqual(['2', 'bar']);
    });

    test('Method get should return value by key', () => {
        map.set(10, 'foo');
        const element = map.get(10);
        expect(element).toBe('foo');
    });

    test('if there is a Linked List in place of the index, then it must go through all the elements and return the desired value', () => {
        map.set(10, 'foo');
        map.set(2, 'bar');
        const element1 = map.get(10);
        const element2 = map.get(2);
        expect(element1).toBe('foo');
        expect(element2).toBe('bar');
    });

    test('Throw Error when call method get with index that not contain element', () => {
        expect(() => {
            map.get(5);
        }).toThrow('No element with key: 5');
    });
});
