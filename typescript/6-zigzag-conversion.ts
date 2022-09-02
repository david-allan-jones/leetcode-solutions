function convert(s: string, numRows: number): string {
    const rowsBuffer: string[] = []
    let [rowStep, rowIndex] = [1, 0]
    for (let i = 0; i < s.length; i++) {
        if (!rowsBuffer[rowIndex]) {
            rowsBuffer[rowIndex] = ''
        }
        rowsBuffer[rowIndex] += s[i]
        if (rowIndex === 0) {
            rowStep = 1
        } else if (rowIndex === numRows - 1) {
            rowStep = -1
        }
        rowIndex += rowStep
    }
    return rowsBuffer.join('')
};