import { describe, test, expect } from 'vitest';
import { fibonacci } from './fibonacci.js';

describe('fibonacci function', () => {
    test('should return 0 for fibonacci(0)', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('should return 1 for fibonacci(1)', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('should return 1 for fibonacci(2)', () => {
        expect(fibonacci(2)).toBe(1);
    });

    test('should return 2 for fibonacci(3)', () => {
        expect(fibonacci(3)).toBe(2);
    });

    test('should return 3 for fibonacci(4)', () => {
        expect(fibonacci(4)).toBe(3);
    });

    test('should return 5 for fibonacci(5)', () => {
        expect(fibonacci(5)).toBe(5);
    });

    test('should return 8 for fibonacci(6)', () => {
        expect(fibonacci(6)).toBe(8);
    });

    test('should return 13 for fibonacci(7)', () => {
        expect(fibonacci(7)).toBe(13);
    });

    test('should handle larger numbers', () => {
        expect(fibonacci(10)).toBe(55);
    });

    test('should handle negative input gracefully', () => {
        expect(() => fibonacci(-1)).toThrow('Input must be a non-negative integer');
    });
});
