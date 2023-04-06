import { CodeGenStructure } from './codeGenStructure.js';
import { beforeEach, describe, expect, test } from '@jest/globals';

const initWithValues = () => {
    return new CodeGenStructure(['name', 'lastName', 'age']);
};

describe('Structure', () => {
    let structureWithValues;

    beforeEach(() => {
        structureWithValues = initWithValues();
    });

    test('Should create structure instance', () => {
        expect(structureWithValues).toBeInstanceOf(CodeGenStructure);
    });

    test('Try to set with one param', () => {
        expect(() => {
            structureWithValues.set('age');
        }).toThrow('Need to pass two arguments');
    });

    test('Set value', () => {
        structureWithValues.set('name', 'Bob');
        expect(structureWithValues.get('name')).toBe('Bob');
    });

    test('Try to get value by a key that does not exist ', () => {
        expect(() => {
            structureWithValues.get('city');
        }).toThrow('No value for key - city');
    });


    test('Get value', () => {
        structureWithValues.set('name', 'John');
        const name = structureWithValues.get('name');
        expect(name).toBe('John');
    });

    test('Try to create empty structure', () => {
        expect(() => {
            const structure = new CodeGenStructure();
        }).toThrow('Params must be an array or it`s length must be greater than 0');
    });

    test('Try to create structure with empty array', () => {
        expect(() => {
            const structure = new CodeGenStructure([]);
        }).toThrow('Params must be an array or it`s length must be greater than 0');
    });

    test('Try to create structure with not array arguments', () => {
        expect(() => {
            const structure = new CodeGenStructure('param');
        }).toThrow('Params must be an array or it`s length must be greater than 0');
    });
});
