/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
 var xorOperation = function(n, start) {
    let result = i = 0
    while (i < n) {
        result = result ^ (start+i*2)
        i++
    }
    return result
};