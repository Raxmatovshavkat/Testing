import { describe, test, expect } from 'vitest';
import { capitalize } from './capitalize.ts';

describe('capitalize function', () => {
    test('should capitalize the first letter of each word in a single word string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    test('should capitalize the first letter of each word in a multi-word string', () => {
        expect(capitalize('hello world')).toBe('Hello World');
    });

    test('should handle strings with multiple spaces between words', () => {
        expect(capitalize('hello   world')).toBe('Hello   World');
    });

    test('should handle strings with leading and trailing spaces', () => {
        expect(capitalize('  hello world  ')).toBe('  Hello World  ');
    });

    test('should handle an empty string', () => {
        expect(capitalize('')).toBe('');
    });

    test('should handle strings with punctuation', () => {
        expect(capitalize('hello, world!')).toBe('Hello, World!');
    });

    test('should handle strings with mixed case', () => {
        expect(capitalize('hElLo WoRLd')).toBe('HElLo WoRLd');
    });

    test('should handle strings with special characters', () => {
        expect(capitalize('hello-world')).toBe('Hello-world');
    });

    test('should handle strings with numbers', () => {
        expect(capitalize('hello world 123')).toBe('Hello World 123');
    });
});
