import { describe, test, expect } from 'vitest';
import { findMax } from './max.ts';

describe('findMax function', () => {
    test('should return the maximum value in an array of positive numbers', () => {
        expect(findMax([1, 2, 3, 4, 5])).toBe(5);
    });

    test('should return the maximum value in an array with negative numbers', () => {
        expect(findMax([-1, -2, -3, -4, -5])).toBe(-1);
    });

    test('should return the maximum value in a mixed array of positive and negative numbers', () => {
        expect(findMax([-1, 2, -3, 4, -5])).toBe(4);
    });

    test('should return the maximum value in an array with a single element', () => {
        expect(findMax([42])).toBe(42);
    });

    test('should return -Infinity for an empty array', () => {
        expect(findMax([])).toBe(-Infinity);
    });
});
