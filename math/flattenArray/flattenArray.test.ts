import { describe, test, expect } from 'vitest';
import { flattenArray } from './flattenArray.js';

describe('flattenArray function', () => {
    test('should flatten a simple nested array', () => {
        expect(flattenArray([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle already flat arrays', () => {
        expect(flattenArray([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('should flatten deeply nested arrays', () => {
        expect(flattenArray([1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    test('should handle empty arrays', () => {
        expect(flattenArray([])).toEqual([]);
    });

    test('should handle arrays with mixed types', () => {
        expect(flattenArray([1, ['a', [true, [null, [undefined, [{}]]]]]])).toEqual([1, 'a', true, null, undefined, {}]);
    });

    test('should handle arrays with multiple nested levels', () => {
        expect(flattenArray([1, [2], [[3]], [[[4]]], [[[[5]]]]])).toEqual([1, 2, 3, 4, 5]);
    });
});
