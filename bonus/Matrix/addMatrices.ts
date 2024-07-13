export function addMatrices(matrix1: number[][], matrix2: number[][]): number[][] {
    return matrix1.map((row, i) => row.map((val, j) => val + matrix2[i][j]));
}
