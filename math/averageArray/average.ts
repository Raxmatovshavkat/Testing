export function averageArray(arr) {
    if (arr.length === 0) throw new Error('Array cannot be empty');
    return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}
