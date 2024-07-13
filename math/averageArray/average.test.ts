import { describe, test, expect } from 'vitest';
import { averageArray } from './average.ts';

describe('averageArray function', () => {
    test('should return the average of all elements in an array of positive numbers', () => {
        expect(averageArray([1, 2, 3, 4, 5])).toBe(3);
    });

    test('should return the average of all elements in an array with negative numbers', () => {
        expect(averageArray([-1, -2, -3, -4, -5])).toBe(-3);
    });

    test('should return the average of all elements in a mixed array of positive and negative numbers', () => {
        expect(averageArray([-1, 2, -3, 4, -5])).toBe(-0.6);
    });

    test('should return the average of all elements in an array with a single element', () => {
        expect(averageArray([42])).toBe(42);
    });

    test('should throw an error for an empty array', () => {
        expect(() => averageArray([])).toThrow('Array cannot be empty');
    });
});
