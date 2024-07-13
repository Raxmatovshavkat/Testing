import { describe, test, expect } from 'vitest';
import { validateEmail } from './validateEmail';

describe('validateEmail function', () => {
    test('should return true for valid email addresses', () => {
        expect(validateEmail('test@example.com')).toBe(true);
        expect(validateEmail('user.name+tag+sorting@example.com')).toBe(true);
        expect(validateEmail('user@domain.co')).toBe(true);
    });

    test('should return false for invalid email addresses', () => {
        expect(validateEmail('plainaddress')).toBe(false);
        expect(validateEmail('@missingusername.com')).toBe(false);
        expect(validateEmail('username@.com')).toBe(false);
        expect(validateEmail('username@domain..com')).toBe(false);
        expect(validateEmail('username@domain.c')).toBe(false);
    });
});
