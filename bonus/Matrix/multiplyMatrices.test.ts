import { describe, test, expect } from 'vitest';
import { multiplyMatrices } from './multiplyMatrices';

describe('multiplyMatrices function', () => {
    test('should multiply two 2x2 matrices', () => {
        const matrix1 = [
            [1, 2],
            [3, 4]
        ];
        const matrix2 = [
            [5, 6],
            [7, 8]
        ];
        const expected = [
            [19, 22],
            [43, 50]
        ];
        expect(multiplyMatrices(matrix1, matrix2)).toEqual(expected);
    });

    test('should multiply a 2x3 matrix by a 3x2 matrix', () => {
        const matrix1 = [
            [1, 2, 3],
            [4, 5, 6]
        ];
        const matrix2 = [
            [7, 8],
            [9, 10],
            [11, 12]
        ];
        const expected = [
            [58, 64],
            [139, 154]
        ];
        expect(multiplyMatrices(matrix1, matrix2)).toEqual(expected);
    });

    test('should handle multiplying with identity matrix', () => {
        const matrix1 = [
            [1, 2],
            [3, 4]
        ];
        const identityMatrix = [
            [1, 0],
            [0, 1]
        ];
        const expected = matrix1; // Should return the same matrix
        expect(multiplyMatrices(matrix1, identityMatrix)).toEqual(expected);
    });

    test('should return a zero matrix when multiplying by a zero matrix', () => {
        const matrix1 = [
            [1, 2],
            [3, 4]
        ];
        const zeroMatrix = [
            [0, 0],
            [0, 0]
        ];
        const expected = [
            [0, 0],
            [0, 0]
        ];
        expect(multiplyMatrices(matrix1, zeroMatrix)).toEqual(expected);
    });
});
