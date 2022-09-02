/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    const rowsBuffer = []
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