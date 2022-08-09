/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {    
    let r = m + n - 2, min = Math.min(m, n)-1, result = 1
    for (let k = 0; k < min; k++) {
        result *= r-k
        result /= k+1
    }
    return result
}