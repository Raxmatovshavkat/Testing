import { describe, test, expect } from 'vitest';
import { removeNullAndUndefined } from './removeNullAndUndefined';

describe('removeNullAndUndefined function', () => {
    test('should remove null and undefined values', () => {
        expect(removeNullAndUndefined([1, null, 2, undefined, 3])).toEqual([1, 2, 3]);
    });

    test('should handle arrays without null and undefined values', () => {
        expect(removeNullAndUndefined([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('should handle arrays with only null and undefined values', () => {
        expect(removeNullAndUndefined([null, undefined])).toEqual([]);
    });

    test('should handle empty arrays', () => {
        expect(removeNullAndUndefined([])).toEqual([]);
    });

    test('should handle arrays with mixed types', () => {
        expect(removeNullAndUndefined([1, 'a', true, null, undefined, {}])).toEqual([1, 'a', true, {}]);
    });

    test('should handle arrays with consecutive null and undefined values', () => {
        expect(removeNullAndUndefined([null, undefined, 1, 2, null, undefined, 3, null])).toEqual([1, 2, 3]);
    });
});
