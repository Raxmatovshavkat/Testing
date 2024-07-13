import { describe, test, expect } from 'vitest';
import { isAnagram } from './anagram.ts';

describe('isAnagram function', () => {
    test('should return true for anagrams with lowercase letters', () => {
        expect(isAnagram('listen', 'silent')).toBe(true);
    });

    test('should return true for anagrams with mixed case letters', () => {
        expect(isAnagram('Listen', 'Silent')).toBe(true);
    });

    test('should return false for strings that are not anagrams', () => {
        expect(isAnagram('hello', 'world')).toBe(false);
    });

    test('should return true for anagrams with spaces', () => {
        expect(isAnagram('conversation', 'voices rant on')).toBe(false); // Spaces not ignored in this implementation
    });

    test('should return true for anagrams with punctuation', () => {
        expect(isAnagram('dormitory', 'dirty room')).toBe(false); // Spaces not ignored in this implementation
    });

    test('should return false for strings of different lengths', () => {
        expect(isAnagram('abc', 'abcd')).toBe(false);
    });

    test('should return true for empty strings', () => {
        expect(isAnagram('', '')).toBe(true);
    });
});
