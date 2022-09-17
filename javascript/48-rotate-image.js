/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    let left = 0, right = matrix.length - 1
    while (left < right) {
        for (let i = 0; i < right - left; i++) {
            let tmp = matrix[left][left + i]
            matrix[left][left + i] = matrix[right - i][left]
            matrix[right - i][left] = matrix[right][right - i]
            matrix[right][right - i] = matrix[left + i][right]
            matrix[left + i][right] = tmp
        }
        left++
        right--
    }
};