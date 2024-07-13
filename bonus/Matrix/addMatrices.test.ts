import { describe, test, expect } from 'vitest';
import { addMatrices } from './addMatrices';

describe('addMatrices function', () => {
    test('should add two 2x2 matrices', () => {
        const matrix1 = [
            [1, 2],
            [3, 4]
        ];
        const matrix2 = [
            [5, 6],
            [7, 8]
        ];
        const expected = [
            [6, 8],
            [10, 12]
        ];
        expect(addMatrices(matrix1, matrix2)).toEqual(expected);
    });

    test('should add two 3x3 matrices', () => {
        const matrix1 = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        const matrix2 = [
            [9, 8, 7],
            [6, 5, 4],
            [3, 2, 1]
        ];
        const expected = [
            [10, 10, 10],
            [10, 10, 10],
            [10, 10, 10]
        ];
        expect(addMatrices(matrix1, matrix2)).toEqual(expected);
    });

    test('should handle matrices with negative numbers', () => {
        const matrix1 = [
            [-1, -2],
            [-3, -4]
        ];
        const matrix2 = [
            [5, 6],
            [7, 8]
        ];
        const expected = [
            [4, 4],
            [4, 4]
        ];
        expect(addMatrices(matrix1, matrix2)).toEqual(expected);
    });

    test('should handle adding with zero matrices', () => {
        const matrix1 = [
            [1, 2],
            [3, 4]
        ];
        const matrix2 = [
            [0, 0],
            [0, 0]
        ];
        const expected = [
            [1, 2],
            [3, 4]
        ];
        expect(addMatrices(matrix1, matrix2)).toEqual(expected);
    });
});
