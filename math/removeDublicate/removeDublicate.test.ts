import { describe, test, expect } from 'vitest';
import { removeDuplicates } from './removeDublicate.ts';

describe('removeDuplicates function', () => {
    test('should return an array with no duplicates from an array of positive numbers', () => {
        expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('should return an array with no duplicates from an array with negative numbers', () => {
        expect(removeDuplicates([-1, -2, -2, -3, -4, -4, -5])).toEqual([-1, -2, -3, -4, -5]);
    });

    test('should return an array with no duplicates from a mixed array of positive and negative numbers', () => {
        expect(removeDuplicates([-1, 2, -3, 4, -5, -1, 2, 4])).toEqual([-1, 2, -3, 4, -5]);
    });

    test('should return the same array if there are no duplicates', () => {
        expect(removeDuplicates([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('should return an empty array when input is an empty array', () => {
        expect(removeDuplicates([])).toEqual([]);
    });

    test('should handle arrays with a single element', () => {
        expect(removeDuplicates([42])).toEqual([42]);
    });
});
