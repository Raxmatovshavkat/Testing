import { describe, test, expect } from 'vitest';
import { sumArray } from './sum.ts';

describe('sumArray function', () => {
    test('should return the sum of all elements in an array of positive numbers', () => {
        expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
    });

    test('should return the sum of all elements in an array with negative numbers', () => {
        expect(sumArray([-1, -2, -3, -4, -5])).toBe(-15);
    });

    test('should return the sum of all elements in a mixed array of positive and negative numbers', () => {
        expect(sumArray([-1, 2, -3, 4, -5])).toBe(-3);
    });

    test('should return the sum of all elements in an array with a single element', () => {
        expect(sumArray([42])).toBe(42);
    });

    test('should return 0 for an empty array', () => {
        expect(sumArray([])).toBe(0);
    });
});
