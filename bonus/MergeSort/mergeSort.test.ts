import { describe, test, expect } from 'vitest';
import { mergeSort } from './mergeSort';

describe('mergeSort function', () => {
    test('should sort an unsorted array', () => {
        const unsortedArray = [5, 3, 8, 1, 2];
        const expected = [1, 2, 3, 5, 8];
        expect(mergeSort(unsortedArray)).toEqual(expected);
    });

    test('should return an empty array when given an empty array', () => {
        expect(mergeSort([])).toEqual([]);
    });

    test('should return a sorted array when given a sorted array', () => {
        const sortedArray = [1, 2, 3, 4, 5];
        expect(mergeSort(sortedArray)).toEqual(sortedArray);
    });

    test('should handle an array with negative numbers', () => {
        const arrayWithNegatives = [3, -1, 4, 0, -5];
        const expected = [-5, -1, 0, 3, 4];
        expect(mergeSort(arrayWithNegatives)).toEqual(expected);
    });

    test('should handle an array with duplicate numbers', () => {
        const arrayWithDuplicates = [3, 1, 2, 3, 1];
        const expected = [1, 1, 2, 3, 3];
        expect(mergeSort(arrayWithDuplicates)).toEqual(expected);
    });
});
