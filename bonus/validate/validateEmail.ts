export function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; 
    return re.test(email) && !/\.{2,}/.test(email); 
}
