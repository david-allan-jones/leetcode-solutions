/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    if (numRows === 1) return [[1]]
    if (numRows === 2) return [[1], [1, 1]]
    
    let result = new Array(numRows)
    result[0] = [1]
    result[1] = [1, 1]
    for (let i = 2; i < numRows; i++) {
        let row = []
        for (let j = 0; j < i+1; j++) {
            if (j === 0 || j === i) {
                row[j] = 1
            } else {
                row[j] = result[i-1][j] + result[i-1][j-1]
            }
        }
        result[i] = row
    }
    return result
};