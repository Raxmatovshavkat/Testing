import { describe, test, expect } from 'vitest';
import { chunkArray } from './chukArray.ts';

describe('chunkArray function', () => {
    test('should chunk an array into smaller arrays of the specified size', () => {
        expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('should handle arrays with a length that is a multiple of the size', () => {
        expect(chunkArray([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
    });

    test('should handle arrays with a length that is not a multiple of the size', () => {
        expect(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
    });

    test('should handle empty arrays', () => {
        expect(chunkArray([], 3)).toEqual([]);
    });

    test('should handle chunk sizes larger than the array length', () => {
        expect(chunkArray([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });

    test('should handle chunk sizes of 1', () => {
        expect(chunkArray([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]]);
    });

    test('should handle arrays with mixed types', () => {
        expect(chunkArray([1, 'a', true, null, undefined, {}], 2)).toEqual([[1, 'a'], [true, null], [undefined, {}]]);
    });

    test('should handle chunk size of 0', () => {
        expect(() => chunkArray([1, 2, 3, 4, 5], 0)).toThrow('Chunk size must be greater than 0');
    });
});
