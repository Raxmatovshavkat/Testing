export function removeNullAndUndefined<T>(arr: (T | null | undefined)[]): T[] {
    return arr.filter((val): val is T => val !== null && val !== undefined);
}
