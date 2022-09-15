/**
 Do not return anything, modify matrix in-place instead.
 */
 function setZeroes(matrix: number[][]): void {
    const zeroRows = (new Array(matrix.length)).fill(false)
    const zeroCols = (new Array(matrix[0].length)).fill(false)
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y] === 0) {
                zeroRows[x] = true
                zeroCols[y] = true
            }
        }
    }        
    for (let i = 0; i < zeroRows.length; i++) {
        if (zeroRows[i] === true) {
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = 0
            }
        }
    }
    for (let i = 0; i < zeroCols.length; i++) {
        if (zeroCols[i] === true) {
            for (let j = 0; j < matrix.length; j++) {
                matrix[j][i] = 0
            }
        }
    }
};