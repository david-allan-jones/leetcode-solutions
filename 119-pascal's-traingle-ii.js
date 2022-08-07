/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1]
    if (rowIndex === 1) return [1, 1]
    
    let row = [1, 1], i = 2
    while (i <= rowIndex) {
        let newRow = []
        for (let j = 0; j < i+1; j++) {
            if (j === 0 || j === i) {
                newRow[j] = 1
            } else {
                newRow[j] = row[j-1] + row[j]
            }
        }
        row = newRow
        i++
    }
    return row
};