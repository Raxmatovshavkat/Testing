import { describe, test, expect } from 'vitest';
import { findMin } from './min.js';

describe('findMin function', () => {
    test('should return the minimum value in an array of positive numbers', () => {
        expect(findMin([1, 2, 3, 4, 5])).toBe(1);
    });

    test('should return the minimum value in an array with negative numbers', () => {
        expect(findMin([-1, -2, -3, -4, -5])).toBe(-5);
    });

    test('should return the minimum value in a mixed array of positive and negative numbers', () => {
        expect(findMin([-1, 2, -3, 4, -5])).toBe(-5);
    });

    test('should return the minimum value in an array with a single element', () => {
        expect(findMin([42])).toBe(42);
    });

    test('should return Infinity for an empty array', () => {
        expect(findMin([])).toBe(Infinity);
    });
});
