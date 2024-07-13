import { describe, test, expect } from 'vitest';
import { arrayIntersection } from './arrayIntersection';

describe('arrayIntersection function', () => {
    test('should return the intersection of two arrays with common elements', () => {
        expect(arrayIntersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    });

    test('should return an empty array when there are no common elements', () => {
        expect(arrayIntersection([1, 2, 3], [4, 5, 6])).toEqual([]);
    });

    test('should handle empty arrays', () => {
        expect(arrayIntersection([], [1, 2, 3])).toEqual([]);
        expect(arrayIntersection([1, 2, 3], [])).toEqual([]);
        expect(arrayIntersection([], [])).toEqual([]);
    });

    test('should handle arrays with duplicate values', () => {
        expect(arrayIntersection([1, 2, 2, 3], [2, 2, 4])).toEqual([2, 2]);
    });

    test('should handle arrays with mixed types', () => {
        expect(arrayIntersection([1, 'a', true], ['a', 2, true])).toEqual(['a', true]);
    });

    test('should return all elements from the first array if it is a subset of the second', () => {
        expect(arrayIntersection([1, 2], [1, 2, 3, 4])).toEqual([1, 2]);
    });
});
