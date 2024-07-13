import { describe, test, expect } from 'vitest';
import { factorial } from './factorial.js';

describe('factorial function', () => {
    test('should return 1 for 0!', () => {
        expect(factorial(0)).toBe(1);
    });

    test('should return 1 for 1!', () => {
        expect(factorial(1)).toBe(1);
    });

    test('should return 2 for 2!', () => {
        expect(factorial(2)).toBe(2);
    });

    test('should return 6 for 3!', () => {
        expect(factorial(3)).toBe(6);
    });

    test('should return 24 for 4!', () => {
        expect(factorial(4)).toBe(24);
    });

    test('should return 120 for 5!', () => {
        expect(factorial(5)).toBe(120);
    });

    test('should handle large numbers', () => {
        expect(factorial(10)).toBe(3628800);
    });

    test('should handle negative numbers gracefully', () => {
        expect(() => factorial(-1)).toThrow('Input must be a non-negative integer');
    });
});
