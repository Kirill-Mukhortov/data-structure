import { Structure } from './structure.js';
import { beforeEach, describe, expect, test } from '@jest/globals';

const initWithValues = () => {
    return new Structure(['name', 'lastName', 'age']);
};

describe('Structure', () => {
    let structureWithValues;

    beforeEach(() => {
        structureWithValues = initWithValues();
    });

    test('Should create structure instance', () => {
        expect(structureWithValues).toBeInstanceOf(Structure);
    });

    test('Try to set with one param', () => {
        expect(() => {
            structureWithValues.set('name')
        }).toThrow('Need to pass two arguments');
    });

    test('Set value', () => {
        structureWithValues.set('name', 'John')
        expect(structureWithValues.get('name')).toBe('John');
    });

    test('Try to get value by a key that does not exist ', () => {
        expect(() => {
            structureWithValues.get('sex')
        }).toThrow('No such key in structure');
    });

    test('Get value', () => {
        structureWithValues.set('name', 'John')
        const name = structureWithValues.get('name')
        expect(name).toBe('John');
    });

    test('Try to delete value by a key that does not exist ', () => {
        expect(() => {
            structureWithValues.delete('sex')
        }).toThrow('No such key in structure');
    });

    test('Delete value', () => {
        structureWithValues.delete('name')
        expect(() => {
            structureWithValues.get('name')
        }).toThrow('No such key in structure');
    });

    test('Try to create empty structure', () => {
        expect(() => {
            const stack = new Structure();
        }).toThrow('Params must be an array or it`s length must be greater than 0');
    });

    test('Try to create structure with empty array', () => {
        expect(() => {
            const stack = new Structure([]);
        }).toThrow('Params must be an array or it`s length must be greater than 0');
    });

    test('Try to create structure with not array arguments', () => {
        expect(() => {
            const stack = new Structure('param');
        }).toThrow('Params must be an array or it`s length must be greater than 0');
    });
});
