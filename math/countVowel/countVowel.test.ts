import { describe, test, expect } from 'vitest';
import { countVowels } from './countVowel.ts';

describe('countVowels function', () => {
    test('should count vowels in a string with numbers, special characters, and letters', () => {
        expect(countVowels('h3ll0 w0rld!')).toBe(0);  // No vowels
    });


    test('should count vowels in a string with only lowercase vowels', () => {
        expect(countVowels('aeiou')).toBe(5);
    });

    test('should count vowels in a string with only uppercase vowels', () => {
        expect(countVowels('AEIOU')).toBe(5);
    });

    test('should count vowels in a string with mixed case vowels', () => {
        expect(countVowels('aEiOu')).toBe(5);
    });

    test('should count vowels in a string with consonants and vowels', () => {
        expect(countVowels('hello world')).toBe(3);
    });

    test('should count vowels in a string with spaces and punctuation', () => {
        expect(countVowels('hello, world!')).toBe(3);
    });

    test('should return 0 when there are no vowels', () => {
        expect(countVowels('bcdfgh')).toBe(0);
    });

    test('should handle strings with numbers and special characters', () => {
        expect(countVowels('1234!@#$')).toBe(0);
    });


    test('should count vowels in a long string', () => {
        const longStr = 'a'.repeat(1000) + 'e'.repeat(1000) + 'i'.repeat(1000) + 'o'.repeat(1000) + 'u'.repeat(1000);
        expect(countVowels(longStr)).toBe(5000);
    });
});
